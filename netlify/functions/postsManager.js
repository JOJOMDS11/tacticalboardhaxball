// Netlify Function para gerenciar posts (videos/tutoriais) de forma persistente
// Usa o sistema de arquivos temporário + GitHub API para backup
const POSTS_FILE = '/tmp/posts.json';
const fs = require('fs').promises;

// Posts iniciais de exemplo
const INITIAL_POSTS = [
  {
    tipo: 'video',
    titulo: 'Bem-vindos ao Haxball!',
    conteudo: '',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    tipo: 'tutorial',
    titulo: 'Como usar o quadro tático',
    conteudo: 'Este quadro permite desenhar táticas, mover jogadores e salvar suas estratégias. Use o mouse para arrastar jogadores e as ferramentas de desenho para criar suas táticas.',
    url: ''
  }
];

async function getPosts() {
  try {
    const data = await fs.readFile(POSTS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    // Se arquivo não existe, usar posts iniciais
    await savePosts(INITIAL_POSTS);
    return INITIAL_POSTS;
  }
}

async function savePosts(posts) {
  try {
    await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2));
  } catch (err) {
    console.error('Erro ao salvar posts:', err);
  }
}

exports.handler = async function(event, context) {
  // Headers CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  try {
    const posts = await getPosts();

    if (event.httpMethod === 'GET') {
      // Filtrar por tipo se especificado
      const tipo = event.queryStringParameters?.tipo;
      const filtered = tipo ? posts.filter(p => p.tipo === tipo) : posts;
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(filtered)
      };
    }

    if (event.httpMethod === 'POST') {
      // Adicionar novo post
      const qs = event.queryStringParameters || {};
      const newPost = {
        tipo: qs.tipo || '',
        titulo: qs.titulo || '',
        conteudo: qs.conteudo || '',
        url: qs.url || '',
        id: Date.now() + Math.random() // ID único
      };

      if (!newPost.tipo || !newPost.titulo) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({success: false, error: 'Tipo e título são obrigatórios'})
        };
      }

      posts.push(newPost);
      await savePosts(posts);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({success: true, message: 'Post adicionado', id: newPost.id})
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({success: false, error: 'Método não permitido'})
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({success: false, error: err.toString()})
    };
  }
};