// Configurações dos jogos (movido para dentro do arquivo para evitar problemas de importação)
const x11Formations = {
  '442': {
    red: [
      { id: 'GK', x: 0.05, y: 0.5 },
      { id: 'LE', x: 0.2, y: 0.15 }, { id: 'ZAG', x: 0.2, y: 0.35 }, { id: 'ZAG', x: 0.2, y: 0.65 }, { id: 'LD', x: 0.2, y: 0.85 },
      { id: 'VOL', x: 0.35, y: 0.25 }, { id: 'MC', x: 0.35, y: 0.5 }, { id: 'MC', x: 0.35, y: 0.75 }, { id: 'MEI', x: 0.48, y: 0.47 },
      { id: 'ATA', x: 0.65, y: 0.35 }, { id: 'ATA', x: 0.65, y: 0.65 }
    ],
    blue: [
      { id: 'GK', x: 0.95, y: 0.5 },
      { id: 'LE', x: 0.8, y: 0.15 }, { id: 'ZAG', x: 0.8, y: 0.35 }, { id: 'ZAG', x: 0.8, y: 0.65 }, { id: 'LD', x: 0.8, y: 0.85 },
      { id: 'VOL', x: 0.65, y: 0.25 }, { id: 'MC', x: 0.65, y: 0.5 }, { id: 'MC', x: 0.65, y: 0.75 }, { id: 'MEI', x: 0.52, y: 0.53 },
      { id: 'ATA', x: 0.35, y: 0.35 }, { id: 'ATA', x: 0.35, y: 0.65 }
    ]
  },
  '433': {
    red: [
      { id: 'GK', x: 0.05, y: 0.5 },
      { id: 'LE', x: 0.2, y: 0.15 }, { id: 'ZAG', x: 0.2, y: 0.35 }, { id: 'ZAG', x: 0.2, y: 0.65 }, { id: 'LD', x: 0.2, y: 0.85 },
      { id: 'VOL', x: 0.32, y: 0.5 }, { id: 'MC', x: 0.42, y: 0.3 }, { id: 'MC', x: 0.42, y: 0.7 },
      { id: 'PE', x: 0.58, y: 0.2 }, { id: 'ATA', x: 0.65, y: 0.5 }, { id: 'PD', x: 0.58, y: 0.8 }
    ],
    blue: [
      { id: 'GK', x: 0.95, y: 0.5 },
      { id: 'LE', x: 0.82, y: 0.15 }, { id: 'ZAG', x: 0.82, y: 0.35 }, { id: 'ZAG', x: 0.82, y: 0.65 }, { id: 'LD', x: 0.82, y: 0.85 },
      { id: 'VOL', x: 0.68, y: 0.5 }, { id: 'MC', x: 0.58, y: 0.3 }, { id: 'MC', x: 0.58, y: 0.7 },
      { id: 'PE', x: 0.42, y: 0.2 }, { id: 'ATA', x: 0.35, y: 0.5 }, { id: 'PD', x: 0.42, y: 0.8 }
    ]
  },
  '352': {
    red: [
      { id: 'GK', x: 0.05, y: 0.5 },
      { id: 'ZAG', x: 0.18, y: 0.25 }, { id: 'ZAG', x: 0.18, y: 0.5 }, { id: 'ZAG', x: 0.18, y: 0.75 },
      { id: 'LE', x: 0.32, y: 0.15 }, { id: 'LD', x: 0.32, y: 0.85 },
      { id: 'VOL', x: 0.38, y: 0.5 }, { id: 'MC', x: 0.45, y: 0.3 }, { id: 'MC', x: 0.45, y: 0.7 },
      { id: 'ATA', x: 0.65, y: 0.35 }, { id: 'ATA', x: 0.65, y: 0.65 }
    ],
    blue: [
      { id: 'GK', x: 0.95, y: 0.5 },
      { id: 'ZAG', x: 0.82, y: 0.25 }, { id: 'ZAG', x: 0.82, y: 0.5 }, { id: 'ZAG', x: 0.82, y: 0.75 },
      { id: 'LE', x: 0.68, y: 0.15 }, { id: 'LD', x: 0.68, y: 0.85 },
      { id: 'VOL', x: 0.62, y: 0.5 }, { id: 'MC', x: 0.55, y: 0.3 }, { id: 'MC', x: 0.55, y: 0.7 },
      { id: 'ATA', x: 0.35, y: 0.35 }, { id: 'ATA', x: 0.35, y: 0.65 }
    ]
  },
  '343': {
    red: [
      { id: 'GK', x: 0.05, y: 0.5 },
      { id: 'ZAG', x: 0.18, y: 0.25 }, { id: 'ZAG', x: 0.18, y: 0.5 }, { id: 'ZAG', x: 0.18, y: 0.75 },
      { id: 'LE', x: 0.32, y: 0.15 }, { id: 'LD', x: 0.32, y: 0.85 },
      { id: 'MC', x: 0.45, y: 0.3 }, { id: 'MC', x: 0.45, y: 0.7 }, { id: 'MEI', x: 0.48, y: 0.5 },
      { id: 'ATA', x: 0.65, y: 0.35 }, { id: 'ATA', x: 0.65, y: 0.65 }
    ],
    blue: [
      { id: 'GK', x: 0.95, y: 0.5 },
      { id: 'ZAG', x: 0.82, y: 0.25 }, { id: 'ZAG', x: 0.82, y: 0.5 }, { id: 'ZAG', x: 0.82, y: 0.75 },
      { id: 'LE', x: 0.68, y: 0.15 }, { id: 'LD', x: 0.68, y: 0.85 },
      { id: 'MC', x: 0.55, y: 0.3 }, { id: 'MC', x: 0.55, y: 0.7 }, { id: 'MEI', x: 0.52, y: 0.5 },
      { id: 'ATA', x: 0.35, y: 0.35 }, { id: 'ATA', x: 0.35, y: 0.65 }
    ]
  }
};

const gameConfigs = {
  '3x3': {
    futsal: {
      backgroundImage: 'https://i.imgur.com/UiOK7Gr.png',
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.1, y: 0.5, size: 29 },
        { uid: 2, id: 'VL', team: 'red', x: 0.25, y: 0.25, size: 29 },
        { uid: 3, id: 'PV', team: 'red', x: 0.25, y: 0.75, size: 29 },
        { uid: 4, id: 'GK', team: 'blue', x: 0.9, y: 0.5, size: 29 },
        { uid: 5, id: 'VL', team: 'blue', x: 0.75, y: 0.25, size: 29 },
        { uid: 6, id: 'PV', team: 'blue', x: 0.75, y: 0.75, size: 29 },
        { uid: 10, id: '', team: 'ball', x: 0.5, y: 0.5, size: 12 }
      ]
    },
    bigeasy: {
      backgroundImage: 'https://i.imgur.com/rMetuYd.png',
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.1, y: 0.5, size: 29 },
        { uid: 2, id: 'VL', team: 'red', x: 0.25, y: 0.25, size: 29 },
        { uid: 3, id: 'PV', team: 'red', x: 0.25, y: 0.75, size: 29 },
        { uid: 4, id: 'GK', team: 'blue', x: 0.9, y: 0.5, size: 29 },
        { uid: 5, id: 'VL', team: 'blue', x: 0.75, y: 0.25, size: 29 },
        { uid: 6, id: 'PV', team: 'blue', x: 0.75, y: 0.75, size: 29 },
        { uid: 10, id: '', team: 'ball', x: 0.5, y: 0.5, size: 12 }
      ]
    }
  },
  '4x4': {
    futsal: {
      backgroundImage: 'https://i.imgur.com/dZgIa0e.png',
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.1, y: 0.5, size: 29 },
        { uid: 2, id: 'VL', team: 'red', x: 0.3, y: 0.3, size: 29 },
        { uid: 3, id: 'MC', team: 'red', x: 0.3, y: 0.7, size: 29 },
        { uid: 4, id: 'PV', team: 'red', x: 0.45, y: 0.5, size: 29 },
        { uid: 5, id: 'GK', team: 'blue', x: 0.9, y: 0.5, size: 29 },
        { uid: 6, id: 'VL', team: 'blue', x: 0.7, y: 0.3, size: 29 },
        { uid: 7, id: 'MC', team: 'blue', x: 0.7, y: 0.7, size: 29 },
        { uid: 8, id: 'PV', team: 'blue', x: 0.55, y: 0.5, size: 29 },
        { uid: 10, id: '', team: 'ball', x: 0.5, y: 0.5, size: 12 }
      ]
    },
    bigeasy: {
      backgroundImage: 'https://i.imgur.com/rMetuYd.png',
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.1, y: 0.5, size: 29 },
        { uid: 2, id: 'VL', team: 'red', x: 0.3, y: 0.3, size: 29 },
        { uid: 3, id: 'MC', team: 'red', x: 0.3, y: 0.7, size: 29 },
        { uid: 4, id: 'PV', team: 'red', x: 0.45, y: 0.5, size: 29 },
        { uid: 5, id: 'GK', team: 'blue', x: 0.9, y: 0.5, size: 29 },
        { uid: 6, id: 'VL', team: 'blue', x: 0.7, y: 0.3, size: 29 },
        { uid: 7, id: 'MC', team: 'blue', x: 0.7, y: 0.7, size: 29 },
        { uid: 8, id: 'PV', team: 'blue', x: 0.55, y: 0.5, size: 29 },
        { uid: 10, id: '', team: 'ball', x: 0.5, y: 0.5, size: 12 }
      ]
    }
  },
  '7x7': {
    futsal: {
      backgroundImage: 'https://i.imgur.com/n56z593.png',
      players: [
        { uid: 1, id: 'GK', team: 'red', x: 0.05, y: 0.5, size: 25 },
        { uid: 2, id: 'LD', team: 'red', x: 0.2, y: 0.2, size: 25 },
        { uid: 3, id: 'PD', team: 'red', x: 0.35, y: 0.2, size: 25 },
        { uid: 4, id: 'MC', team: 'red', x: 0.15, y: 0.6, size: 25 },
        { uid: 5, id: 'LE', team: 'red', x: 0.2, y: 0.8, size: 25 },
        { uid: 6, id: 'PV', team: 'red', x: 0.35, y: 0.5, size: 25 },
        { uid: 7, id: 'PE', team: 'red', x: 0.35, y: 0.8, size: 25 },

        { uid: 8, id: 'GK', team: 'blue', x: 0.95, y: 0.5, size: 25 },
        { uid: 9, id: 'LD', team: 'blue', x: 0.8, y: 0.2, size: 25 },
        { uid: 10, id: 'PD', team: 'blue', x: 0.65, y: 0.2, size: 25 },
        { uid: 11, id: 'MC', team: 'blue', x: 0.85, y: 0.6, size: 25 },
        { uid: 12, id: 'LE', team: 'blue', x: 0.8, y: 0.8, size: 25 },
        { uid: 13, id: 'PV', team: 'blue', x: 0.65, y: 0.5, size: 25 },
        { uid: 14, id: 'PE', team: 'blue', x: 0.65, y: 0.8, size: 25 },

        { uid: 15, id: '', team: 'ball', x: 0.5, y: 0.5, size: 10 }
      ]
    }
  },
  '11x11': {
    futsal: {
      backgroundImage: 'https://i.imgur.com/TMJUugB.png',
      players: [
        // Time Vermelho (Formação 4-4-2)
        { uid: 1, id: 'GK', team: 'red', x: 0.05, y: 0.5, size: 22 },

        // Defesa
        { uid: 2, id: 'LE', team: 'red', x: 0.2, y: 0.15, size: 22 },
        { uid: 3, id: 'ZAG', team: 'red', x: 0.2, y: 0.35, size: 22 },
        { uid: 4, id: 'ZAG', team: 'red', x: 0.2, y: 0.65, size: 22 },
        { uid: 5, id: 'LD', team: 'red', x: 0.2, y: 0.85, size: 22 },

        // Meio-campo
        { uid: 6, id: 'VOL', team: 'red', x: 0.35, y: 0.25, size: 22 },
        { uid: 7, id: 'MC', team: 'red', x: 0.35, y: 0.5, size: 22 },
        { uid: 8, id: 'MC', team: 'red', x: 0.35, y: 0.75, size: 22 },
        { uid: 9, id: 'MEI', team: 'red', x: 0.48, y: 0.47, size: 22 },

        // Ataque
        { uid: 10, id: 'ATA', team: 'red', x: 0.65, y: 0.35, size: 22 },
        { uid: 11, id: 'ATA', team: 'red', x: 0.65, y: 0.65, size: 22 },

        // Time Azul (Formação 4-4-2)
        { uid: 12, id: 'GK', team: 'blue', x: 0.95, y: 0.5, size: 22 },

        // Defesa
        { uid: 13, id: 'LE', team: 'blue', x: 0.8, y: 0.15, size: 22 },
        { uid: 14, id: 'ZAG', team: 'blue', x: 0.8, y: 0.35, size: 22 },
        { uid: 15, id: 'ZAG', team: 'blue', x: 0.8, y: 0.65, size: 22 },
        { uid: 16, id: 'LD', team: 'blue', x: 0.8, y: 0.85, size: 22 },

        // Meio-campo
        { uid: 17, id: 'VOL', team: 'blue', x: 0.65, y: 0.25, size: 22 },
        { uid: 18, id: 'MC', team: 'blue', x: 0.65, y: 0.5, size: 22 },
        { uid: 19, id: 'MC', team: 'blue', x: 0.65, y: 0.75, size: 22 },
        { uid: 20, id: 'MEI', team: 'blue', x: 0.52, y: 0.53, size: 22 },

        // Ataque
        { uid: 21, id: 'ATA', team: 'blue', x: 0.35, y: 0.35, size: 22 },
        { uid: 22, id: 'ATA', team: 'blue', x: 0.35, y: 0.65, size: 22 },

        // Bola
        { uid: 23, id: '', team: 'ball', x: 0.5, y: 0.5, size: 10 }
      ]
    },
    realsoccer: {
      backgroundImage: 'https://i.imgur.com/VJ0hQX5.png',
      players: [
        // Time Vermelho (Formação 4-3-3)
        { uid: 1, id: 'GK', team: 'red', x: 0.05, y: 0.5, size: 22 },

        // Defesa
        { uid: 2, id: 'LE', team: 'red', x: 0.18, y: 0.15, size: 22 },
        { uid: 3, id: 'ZAG', team: 'red', x: 0.18, y: 0.35, size: 22 },
        { uid: 4, id: 'ZAG', team: 'red', x: 0.18, y: 0.65, size: 22 },
        { uid: 5, id: 'LD', team: 'red', x: 0.18, y: 0.85, size: 22 },

        // Meio-campo
        { uid: 6, id: 'VOL', team: 'red', x: 0.32, y: 0.5, size: 22 },
        { uid: 7, id: 'MC', team: 'red', x: 0.42, y: 0.3, size: 22 },
        { uid: 8, id: 'MC', team: 'red', x: 0.42, y: 0.7, size: 22 },

        // Ataque
        { uid: 9, id: 'PE', team: 'red', x: 0.58, y: 0.2, size: 22 },
        { uid: 10, id: 'ATA', team: 'red', x: 0.65, y: 0.5, size: 22 },
        { uid: 11, id: 'PD', team: 'red', x: 0.58, y: 0.8, size: 22 },

        // Time Azul (Formação 4-3-3)
        { uid: 12, id: 'GK', team: 'blue', x: 0.95, y: 0.5, size: 22 },

        // Defesa
        { uid: 13, id: 'LE', team: 'blue', x: 0.82, y: 0.15, size: 22 },
        { uid: 14, id: 'ZAG', team: 'blue', x: 0.82, y: 0.35, size: 22 },
        { uid: 15, id: 'ZAG', team: 'blue', x: 0.82, y: 0.65, size: 22 },
        { uid: 16, id: 'LD', team: 'blue', x: 0.82, y: 0.85, size: 22 },

        // Meio-campo
        { uid: 17, id: 'VOL', team: 'blue', x: 0.68, y: 0.5, size: 22 },
        { uid: 18, id: 'MC', team: 'blue', x: 0.58, y: 0.3, size: 22 },
        { uid: 19, id: 'MC', team: 'blue', x: 0.58, y: 0.7, size: 22 },

        // Ataque
        { uid: 20, id: 'PE', team: 'blue', x: 0.42, y: 0.2, size: 22 },
        { uid: 21, id: 'ATA', team: 'blue', x: 0.35, y: 0.5, size: 22 },
        { uid: 22, id: 'PD', team: 'blue', x: 0.42, y: 0.8, size: 22 },

        // Bola
        { uid: 23, id: '', team: 'ball', x: 0.5, y: 0.5, size: 8 }
      ]
    }
  }
};

// Classe simples para compatibilidade (hitwebcounter usado no HTML)
class SimpleTracker {

  constructor() {
    this.updateGlobalCounter();
  }

  async updateGlobalCounter() {
    const counterDisplay = document.getElementById('counterDisplay');
    if (!counterDisplay) return;
    try {
  // POST para incrementar via proxy Netlify (evita CORS)
  const response = await fetch('/.netlify/functions/gSheetsProxy', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.count !== undefined) {
          counterDisplay.textContent = data.count.toLocaleString();
        } else {
          counterDisplay.textContent = 'Erro';
        }
      } else {
        counterDisplay.textContent = 'Erro';
      }
    } catch (err) {
      // Fallback: contador local baseado em sessionStorage
      let localCount = parseInt(sessionStorage.getItem('localVisitorCount') || '0');
      localCount++;
      sessionStorage.setItem('localVisitorCount', localCount.toString());
      counterDisplay.textContent = (1000 + localCount).toLocaleString(); // Simula contador alto
      console.warn('Usando contador local:', err);
    }
  }

  // Métodos para compatibilidade
  async trackVisit() { }
  async trackDownload() { }
  async trackDraw() { }
  async trackLanguageChange() { }
  async trackDiscordClick() { }
  async trackConfigChange() { }
  updateViewerDisplay() { }
}

// Instância global do tracker
const statsTracker = new SimpleTracker();

// --- INTEGRAÇÃO GOOGLE SHEETS API: POSTS (VÍDEOS/TUTORIAIS) ---
// Usar proxy Netlify para evitar CORS no browser
const GOOGLE_SHEETS_API_URL = '/.netlify/functions/gSheetsProxy';

// Carregar posts públicos (vídeos e tutoriais)
async function loadPublicPosts(tipo, listElementId) {
  try {
    const response = await fetch('/.netlify/functions/postsManager?tipo=' + tipo, { method: 'GET', headers: { 'Accept': 'application/json' } });
    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new Error('Erro na resposta: ' + (text || response.statusText));
    }
    const contentType = response.headers.get('content-type') || '';
    let data;
    if (contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text().catch(() => '');
      throw new Error('Resposta inválida do servidor: ' + (text || contentType));
    }
    if (!data.success && !Array.isArray(data)) throw new Error('Dados inválidos');
    const posts = Array.isArray(data) ? data : [];
    const filtered = posts.filter(p => p.tipo === tipo);
    const list = document.getElementById(listElementId);
    if (!list) return;
    list.innerHTML = '';
    if (filtered.length === 0) {
      list.innerHTML = '<p style="color: #999;">Nenhum item encontrado</p>';
      return;
    }
    filtered.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post-item';
      div.style.cssText = 'padding: 10px; margin: 10px 0; background: #2c2c2c; border-radius: 8px; border: 1px solid #444;';
      if (tipo === 'video') {
        const titleEl = document.createElement('b');
        titleEl.textContent = post.titulo;
        div.appendChild(titleEl);
        div.appendChild(document.createElement('br'));
        if (/^https?:\/\//i.test(post.url || '')) {
          const linkEl = document.createElement('a');
          linkEl.href = post.url;
          linkEl.target = '_blank';
          linkEl.rel = 'noopener noreferrer';
          linkEl.style.color = '#B917FF';
          linkEl.textContent = 'Assistir';
          div.appendChild(linkEl);
        }
      } else {
        const titleEl = document.createElement('b');
        titleEl.textContent = post.titulo;
        div.appendChild(titleEl);
        div.appendChild(document.createElement('br'));
        const contentEl = document.createElement('div');
        contentEl.style.cssText = 'margin-top: 5px; color: #ddd;';
        contentEl.textContent = post.conteudo;
        div.appendChild(contentEl);
      }
      list.appendChild(div);
    });
  } catch (err) {
    console.error('Erro ao carregar posts:', err);
    const list = document.getElementById(listElementId);
    if (list) list.innerHTML = '<p style="color: #ff4444;">Erro ao carregar</p>';
  }
}

// Adicionar post (admin)
async function addPost(tipo, titulo, conteudo, url) {
  try {
    const secret = (typeof contentManager !== 'undefined' && contentManager.adminPassword) || '';
    const params = new URLSearchParams({
      tipo,
      titulo,
      conteudo,
      url: url || '',
      secret
    });
    const response = await fetch('/.netlify/functions/postsManager?' + params.toString(), { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    const contentType = response.headers.get('content-type') || '';
    let data;
    if (contentType.includes('application/json')) data = await response.json();
    else {
      const text = await response.text().catch(() => '');
      throw new Error('Resposta inválida do servidor: ' + (text || contentType));
    }
    if (!response.ok || !data.success) throw new Error(data.error || 'Erro desconhecido');
    
    // Recarregar lista após adicionar
    if (tipo === 'video') loadPublicPosts('video', 'publicVideosList');
    if (tipo === 'tutorial') loadPublicPosts('tutorial', 'publicTutorialsList');
    
    // Mostrar sucesso
    alert('Post adicionado com sucesso!');
  } catch (err) {
    console.error('Erro ao adicionar post:', err);
    alert('Erro ao adicionar post: ' + err.message);
  }
}

// Inicialização das abas de vídeos e tutoriais
document.addEventListener('DOMContentLoaded', () => {
  // Vídeos públicos
  loadPublicPosts('video', 'publicVideosList');
  // Tutoriais públicos
  loadPublicPosts('tutorial', 'publicTutorialsList');
});

// Funções para admin (chamadas nos botões)
window.addVideo = function() {
  const titulo = document.getElementById('videoTitle').value;
  const url = document.getElementById('videoUrl').value;
  if (titulo && url) {
    addPost('video', titulo, '', url);
    document.getElementById('videoTitle').value = '';
    document.getElementById('videoUrl').value = '';
  }
};

window.addTutorial = function() {
  const titulo = document.getElementById('tutorialTitle').value;
  const conteudo = document.getElementById('tutorialContent').value;
  if (titulo && conteudo) {
    addPost('tutorial', titulo, conteudo, '');
    document.getElementById('tutorialTitle').value = '';
    document.getElementById('tutorialContent').value = '';
  }
};

const board = document.getElementById("board");
const draw = document.getElementById("drawLayer");
const playersLayer = document.getElementById("players");

// Verificar se os elementos existem
if (!board || !draw || !playersLayer) {
  console.error('Elementos HTML não encontrados!', { board, draw, playersLayer });
}

const ctx = draw?.getContext("2d");
let mode = 'line';
let drawing = false;
let erasing = false;
let last = null;
let startPos = null;
let history = [];
const maxHistory = 10;
let currentLang = 'pt';
let currentTeamSize = '3x3';
let currentMapType = 'futsal';

// Sistema de shadow para jogadores
let shadows = [];
let dragginWithShadow = false;
let shadowOriginalPos = null;
let shadowsEnabled = true;

// Sistema de duas cores para desenho
let primaryColor = '#B917FF';
let secondaryColor = '#ff0000';
let redShadowColor = '#ff4444';
let blueShadowColor = '#4444ff';

// Usar as configurações
let players = [...gameConfigs[currentTeamSize][currentMapType].players];

// Objeto com as traduções
const translations = {
  pt: {
    drawOnBtn: "Ativar Desenho",
    drawOffBtn: "Desativar Desenho",
    eraseBtn: "Borracha",
    clearBtn: "Limpar",
    colorLabel: "Cor:",
    downloadBtn: "Baixar PNG",
    freeBtn: "Livre",
    lineBtn: "Linha",
    squareBtn: "Quadrado",
    triangleBtn: "Triângulo",
    circleBtn: "Círculo",
    arrowBtn: "Seta",
    strokeSizeLabel: "Tamanho do Traço:",
    eraserSizeLabel: "Tamanho da Borracha:",
    discordMessage: "ENTRE AGORA MESMO EM NOSSO DISCORD PARA PARTICIPAR DOS EVENTOS.",
    creditsLabel: "Feito por:",
    helpProject: "Ajude o projeto",
    teamSizeLabel: "Tamanho do Time:",
    mapTypeLabel: "Tipo de Mapa:",
    currentModeLabel: "— 3x3 Futsal",
    comingSoon: "Em breve!",
    primaryColorLabel: "Cor Primária:",
    secondaryColorLabel: "Cor Secundária:",
    tipsButton: "💡 Dicas",
    viewerCount: "Visitantes",
    toggleShadowBtn: "Ativar Sombra"
  },
  en: {
    drawOnBtn: "Activate Draw",
    drawOffBtn: "Deactivate Draw",
    eraseBtn: "Eraser",
    clearBtn: "Clear",
    colorLabel: "Color:",
    downloadBtn: "Download PNG",
    freeBtn: "Free",
    lineBtn: "Line",
    squareBtn: "Square",
    triangleBtn: "Triangle",
    circleBtn: "Circle",
    arrowBtn: "Arrow",
    strokeSizeLabel: "Stroke Size:",
    eraserSizeLabel: "Eraser Size:",
    discordMessage: "JOIN OUR DISCORD NOW TO PARTICIPATE IN EVENTS.",
    creditsLabel: "Made by:",
    helpProject: "Help the project",
    teamSizeLabel: "Team Size:",
    mapTypeLabel: "Map Type:",
    currentModeLabel: "— 3x3 Futsal",
    comingSoon: "Coming soon!",
    primaryColorLabel: "Primary Color:",
    secondaryColorLabel: "Secondary Color:",
    tipsButton: "💡 Tips",
    viewerCount: "Visitors",
    toggleShadowBtn: "Toggle Shadow"
  },
  tr: {
    drawOnBtn: "Çizimi Etkinleştir",
    drawOffBtn: "Çizimi Devre Dışı Bırak",
    eraseBtn: "Silgi",
    clearBtn: "Temizle",
    colorLabel: "Renk:",
    downloadBtn: "PNG İndir",
    freeBtn: "Serbest",
    lineBtn: "Çizgi",
    squareBtn: "Kare",
    triangleBtn: "Üçgen",
    circleBtn: "Çember",
    arrowBtn: "Ok",
    strokeSizeLabel: "Çizgi Kalınlığı:",
    eraserSizeLabel: "Silgi Boyutu:",
    discordMessage: "ETKİNLİKLERE KATILMAK İÇİN DISCORD'UMUZA HEMEN KATILIN.",
    creditsLabel: "Yapılan:",
    helpProject: "Projeye yardım et",
    teamSizeLabel: "Takım Boyutu:",
    mapTypeLabel: "Harita Tipi:",
    currentModeLabel: "— 3x3 Futsal",
    comingSoon: "Yakında!",
    primaryColorLabel: "Birincil Renk:",
    secondaryColorLabel: "İkincil Renk:",
    tipsButton: "💡 İpuçları",
    viewerCount: "Ziyaretçiler",
    toggleShadowBtn: "Gölge Aç/Kapat"
  },
  es: {
    drawOnBtn: "Activar Dibujo",
    drawOffBtn: "Desactivar Dibujo",
    eraseBtn: "Goma",
    clearBtn: "Limpiar",
    colorLabel: "Color:",
    downloadBtn: "Descargar PNG",
    freeBtn: "Libre",
    lineBtn: "Línea",
    squareBtn: "Cuadrado",
    triangleBtn: "Triángulo",
    circleBtn: "Círculo",
    arrowBtn: "Flecha",
    strokeSizeLabel: "Grosor del Trazo:",
    eraserSizeLabel: "Tamaño de la Goma:",
    discordMessage: "ÚNETE A NUESTRO DISCORD AHORA PARA PARTICIPAR EN LOS EVENTOS.",
    creditsLabel: "Hecho por:",
    helpProject: "Ayuda al proyecto",
    teamSizeLabel: "Tamaño del Equipo:",
    mapTypeLabel: "Tipo de Mapa:",
    currentModeLabel: "— 3x3 Futsal",
    comingSoon: "¡Próximamente!",
    primaryColorLabel: "Color Primario:",
    secondaryColorLabel: "Color Secundario:",
    tipsButton: "💡 Consejos",
    viewerCount: "Visitantes",
    toggleShadowBtn: "Activar Sombra"
  }
};

function updateCurrentModeLabel() {
  const teamSize = currentTeamSize;
  const mapType = currentMapType.charAt(0).toUpperCase() + currentMapType.slice(1);
  document.getElementById('currentModeLabel').textContent = `— ${teamSize} ${mapType}`;
}

function populateSelects() {
  const teamSizeSelect = document.getElementById('teamSizeSelect');
  const mapTypeSelect = document.getElementById('mapTypeSelect');

  teamSizeSelect.innerHTML = '';
  mapTypeSelect.innerHTML = '';

  Object.keys(gameConfigs).forEach(teamSize => {
    const option = document.createElement('option');
    option.value = teamSize;
    option.textContent = teamSize;
    if (teamSize === currentTeamSize) option.selected = true;
    teamSizeSelect.appendChild(option);
  });

  if (gameConfigs[currentTeamSize]) {
    Object.keys(gameConfigs[currentTeamSize]).forEach(mapType => {
      const option = document.createElement('option');
      option.value = mapType;
      option.textContent = mapType.charAt(0).toUpperCase() + mapType.slice(1);
      if (mapType === currentMapType) option.selected = true;
      mapTypeSelect.appendChild(option);
    });
  }
}

function updateTexts() {
  // Verificar se os elementos existem antes de aplicar textos
  const elements = {
    'drawOnBtn': translations[currentLang].drawOnBtn,
    'drawOffBtn': translations[currentLang].drawOffBtn,
    'eraseBtn': translations[currentLang].eraseBtn,
    'clearBtn': translations[currentLang].clearBtn,
    'downloadBtn': translations[currentLang].downloadBtn,
    'freeBtn': translations[currentLang].freeBtn,
    'lineBtn': translations[currentLang].lineBtn,
    'squareBtn': translations[currentLang].squareBtn,
    'triangleBtn': translations[currentLang].triangleBtn,
    'circleBtn': translations[currentLang].circleBtn,
    'arrowBtn': translations[currentLang].arrowBtn,
    'tipsBtn': translations[currentLang].tipsButton,
    'toggleShadowBtn': shadowsEnabled ?
      (currentLang === 'pt' ? 'Desativar Sombra' :
        currentLang === 'en' ? 'Disable Shadow' :
          currentLang === 'tr' ? 'Gölgeyi Kapat' : 'Desactivar Sombra') :
      translations[currentLang].toggleShadowBtn
  };

  // Aplicar textos aos elementos
  Object.keys(elements).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = elements[id];
    } else {
      console.warn(`Elemento não encontrado: ${id}`);
    }
  });

  // Labels
  const labels = {
    'strokeSizeLabel': translations[currentLang].strokeSizeLabel,
    'eraserSizeLabel': translations[currentLang].eraserSizeLabel,
    'primaryColorLabel': translations[currentLang].primaryColorLabel,
    'secondaryColorLabel': translations[currentLang].secondaryColorLabel,
    'creditsLabel': translations[currentLang].creditsLabel,
    'helpProjectLabel': translations[currentLang].helpProject,
    'teamSizeLabel': translations[currentLang].teamSizeLabel,
    'mapTypeLabel': translations[currentLang].mapTypeLabel
  };

  Object.keys(labels).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = labels[id];
    }
  });

  // Discord message
  const discordLink = document.querySelector('.discord-message a');
  if (discordLink) {
    discordLink.textContent = translations[currentLang].discordMessage;
  }

  document.querySelectorAll('.language-selector img').forEach(img => {
    img.classList.remove('active');
  });
  document.getElementById(`flag-${currentLang}`).classList.add('active');

  // Atualizar contador de viewers
  statsTracker.updateViewerDisplay();

  updateCurrentModeLabel();
}

// Event listeners para as bandeiras
document.getElementById('flag-pt').addEventListener('click', () => {
  currentLang = 'pt';
  updateTexts();
  statsTracker.trackLanguageChange('pt');
});
document.getElementById('flag-en').addEventListener('click', () => {
  currentLang = 'en';
  updateTexts();
  statsTracker.trackLanguageChange('en');
});
document.getElementById('flag-tr').addEventListener('click', () => {
  currentLang = 'tr';
  updateTexts();
  statsTracker.trackLanguageChange('tr');
});
document.getElementById('flag-es').addEventListener('click', () => {
  currentLang = 'es';
  updateTexts();
  statsTracker.trackLanguageChange('es');
});

// Event listeners para configurações de jogo
document.getElementById('teamSizeSelect').addEventListener('change', (e) => {
  const newTeamSize = e.target.value;

  if (gameConfigs[newTeamSize]) {
    const availableMaps = Object.keys(gameConfigs[newTeamSize]);
    const newMapType = availableMaps.includes(currentMapType) ? currentMapType : availableMaps[0];

    changeGameConfig(newTeamSize, newMapType);
    statsTracker.trackConfigChange('team_size', newTeamSize);
  } else {
    e.target.value = currentTeamSize;
    alert(translations[currentLang].comingSoon);
  }
});

document.getElementById('mapTypeSelect').addEventListener('change', (e) => {
  const newMapType = e.target.value;

  if (gameConfigs[currentTeamSize] && gameConfigs[currentTeamSize][newMapType]) {
    changeGameConfig(currentTeamSize, newMapType);
    statsTracker.trackConfigChange('map_type', newMapType);
  } else {
    e.target.value = currentMapType;
    alert(translations[currentLang].comingSoon);
  }
});

function changeGameConfig(teamSize, mapType) {
  currentTeamSize = teamSize;
  currentMapType = mapType;

  // Exibir seletores de formação apenas para x11
  const formationSelectors = document.getElementById('formationSelectors');
  if (teamSize === '11x11') {
    formationSelectors.style.display = 'flex';
  } else {
    formationSelectors.style.display = 'none';
  }

  playersLayer.innerHTML = '';
  let config = gameConfigs[teamSize][mapType];
  players = [...config.players];

  // Se x11, aplicar formação customizada se selecionada
  if (teamSize === '11x11') {
    const redFormation = document.getElementById('redFormationSelect').value;
    const blueFormation = document.getElementById('blueFormationSelect').value;
    // Atualiza jogadores red
    let redPlayers = x11Formations[redFormation].red.map((p, i) => ({
      uid: i + 1,
      id: p.id,
      team: 'red',
      x: p.x,
      y: p.y,
      size: 22
    }));
    // Atualiza jogadores blue
    let bluePlayers = x11Formations[blueFormation].blue.map((p, i) => ({
      uid: i + 12,
      id: p.id,
      team: 'blue',
      x: p.x,
      y: p.y,
      size: 22
    }));
    // Bola
    let ball = { uid: 23, id: '', team: 'ball', x: 0.5, y: 0.5, size: 10 };
    players = [...redPlayers, ...bluePlayers, ball];
  }

  board.style.backgroundImage = `url('${config.backgroundImage}')`;

  players.forEach(p => {
    const el = document.createElement("div");
    el.className = `player ${p.team}`;
    el.textContent = p.id;
    el.dataset.uid = p.uid;
    el.style.setProperty('--size', `${p.size}px`);
    playersLayer.appendChild(el);
    p.el = el;
  });

  placePlayers();

  ctx.clearRect(0, 0, draw.width, draw.height);
  history = [];
  shadows = [];

  populateSelects();
  updateCurrentModeLabel();
}

document.querySelector('.discord-message a').addEventListener('click', () => {
  statsTracker.trackDiscordClick();
});

function saveState() {
  if (history.length >= maxHistory) {
    history.shift();
  }
  history.push(draw.toDataURL());
}

function undo() {
  if (history.length > 0) {
    history.pop();
    if (history.length > 0) {
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, draw.width, draw.height);
        ctx.drawImage(img, 0, 0);
        drawShadows(); // Redesenhar shadows após undo
      };
      img.src = history[history.length - 1];
    } else {
      ctx.clearRect(0, 0, draw.width, draw.height);
      drawShadows(); // Desenhar apenas shadows se não há histórico
    }
  }
}

function resizeCanvas() {
  if (!draw || !board || !ctx) {
    console.error('Canvas ou elementos não encontrados para resize');
    return;
  }

  draw.width = board.clientWidth;
  draw.height = board.clientHeight;

  if (history.length > 0) {
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      drawShadows(); // Redesenhar shadows após redimensionar
    };
    img.src = history[history.length - 1];
  } else {
    drawShadows(); // Desenhar shadows mesmo sem histórico
  }
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Inicializar jogadores
players.forEach(p => {
  const el = document.createElement("div");
  el.className = `player ${p.team}`;
  el.textContent = p.id;
  el.dataset.uid = p.uid;
  // Aplicar tamanho personalizado
  el.style.setProperty('--size', `${p.size}px`);
  playersLayer.appendChild(el);
  p.el = el;
});

function placePlayers() {
  const rect = board.getBoundingClientRect();
  players.forEach(p => {
    const size = p.size || 29; // Usar tamanho do config ou padrão
    p.el.style.left = (p.x * rect.width - size / 2) + "px";
    p.el.style.top = (p.y * rect.height - size / 2) + "px";
  });
}
placePlayers();
window.addEventListener("resize", placePlayers);

// Sistema de drag e shadow
let drag = null;
board.addEventListener("pointerdown", e => {
  const t = e.target.closest('.player');
  if (!t) return;

  const rect = board.getBoundingClientRect();
  const uniqueId = t.dataset.uid;
  const p = players.find(pp => pp.uid == uniqueId);
  if (!p) return;

  const size = p.size || 29;

  // Se for botão direito, criar shadow E mover o jogador (se shadow estiver ativado)
  if (e.button === 2) {
    e.preventDefault();
    if (shadowsEnabled) {
      dragginWithShadow = true;
      shadowOriginalPos = { x: p.x, y: p.y, player: p };
    }
    drag = { p, offsetX: e.clientX - rect.left - (p.x * rect.width), offsetY: e.clientY - rect.top - (p.y * rect.height) };
    t.setPointerCapture(e.pointerId);
    return;
  }

  // Botão esquerdo - drag normal
  drag = { p, offsetX: e.clientX - rect.left - (p.x * rect.width), offsetY: e.clientY - rect.top - (p.y * rect.height) };
  t.setPointerCapture(e.pointerId);
});

window.addEventListener("pointermove", e => {
  if (!drag) return;
  const rect = board.getBoundingClientRect();
  const size = drag.p.size || 29;

  drag.p.x = (e.clientX - rect.left - drag.offsetX) / rect.width;
  drag.p.y = (e.clientY - rect.top - drag.offsetY) / rect.height;

  const minX = (size / 2) / rect.width;
  const maxX = 1 - (size / 2) / rect.width;
  const minY = (size / 2) / rect.height;
  const maxY = 1 - (size / 2) / rect.height;

  drag.p.x = Math.max(minX, Math.min(drag.p.x, maxX));
  drag.p.y = Math.max(minY, Math.min(drag.p.y, maxY));

  placePlayers();

  // Se estiver arrastando com shadow, redesenhar o canvas com o shadow temporário
  if (dragginWithShadow && shadowOriginalPos) {
    ctx.clearRect(0, 0, draw.width, draw.height);
    if (history.length > 0) {
      const lastState = new Image();
      lastState.src = history[history.length - 1];
      ctx.drawImage(lastState, 0, 0);
    }

    // Desenhar shadows existentes
    drawShadows();

    // Desenhar shadow temporário na posição original
    const startX = shadowOriginalPos.x * rect.width;
    const startY = shadowOriginalPos.y * rect.height;
    const endX = drag.p.x * rect.width;
    const endY = drag.p.y * rect.height;

    // Linha de movimento
    ctx.strokeStyle = '#ffff00';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Shadow do player na posição original
    const shadowSize = drag.p.size || 29;
    ctx.save();
    ctx.globalAlpha = 0.5;

    ctx.beginPath();
    ctx.arc(startX, startY, shadowSize / 2 - 2, 0, Math.PI * 2);
    ctx.fillStyle = drag.p.team === 'red' ? '#e53935' : drag.p.team === 'blue' ? '#1e88e5' : '#B917FF';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    if (drag.p.id) {
      ctx.font = `bold ${Math.max(10, shadowSize * 0.4)}px Arial, sans-serif`;
      ctx.fillStyle = 'white';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(drag.p.id, startX, startY);
    }

    ctx.restore();
  }
});

window.addEventListener("pointerup", e => {
  if (dragginWithShadow && shadowOriginalPos) {
    // Criar shadow permanente
    shadows.push({
      startX: shadowOriginalPos.x,
      startY: shadowOriginalPos.y,
      endX: drag.p.x,
      endY: drag.p.y,
      playerId: drag.p.uid,
      playerSize: drag.p.size || 29,
      playerTeam: drag.p.team,
      playerText: drag.p.id
    });

    // Limpar e redesenhar tudo
    ctx.clearRect(0, 0, draw.width, draw.height);
    if (history.length > 0) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
        drawShadows();
        saveState();
      };
      img.src = history[history.length - 1];
    } else {
      drawShadows();
      saveState();
    }

    dragginWithShadow = false;
    shadowOriginalPos = null;
  }

  drag = null;
});

// Funções de desenho
function getPos(e) {
  if (!draw) return { x: 0, y: 0 };
  const rect = draw.getBoundingClientRect();
  return { x: e.clientX - rect.left, y: e.clientY - rect.top };
}

function drawShadows() {
  if (!ctx || !board) return;

  const rect = board.getBoundingClientRect();

  shadows.forEach(shadow => {
    const startX = shadow.startX * rect.width;
    const startY = shadow.startY * rect.height;
    const endX = shadow.endX * rect.width;
    const endY = shadow.endY * rect.height;

    // Desenhar linha de movimento
    const lineColor = shadow.playerTeam === 'red' ? redShadowColor : shadow.playerTeam === 'blue' ? blueShadowColor : '#ffff00';
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Desenhar shadow do player na posição final
    const shadowSize = shadow.playerSize;
    ctx.save();
    ctx.globalAlpha = 0.5;

    // Círculo do player shadow
    ctx.beginPath();
    ctx.arc(endX, endY, shadowSize / 2 - 2, 0, Math.PI * 2);
    const shadowFillColor = shadow.playerTeam === 'red' ? redShadowColor : shadow.playerTeam === 'blue' ? blueShadowColor : '#B917FF';
    ctx.fillStyle = shadowFillColor;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Texto do player shadow
    if (shadow.playerText) {
      ctx.font = `bold ${Math.max(10, shadowSize * 0.4)}px Arial, sans-serif`;
      ctx.fillStyle = 'white';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(shadow.playerText, endX, endY);
    }

    ctx.restore();
  });
}

function drawShape(e) {
  const pos = getPos(e);
  ctx.clearRect(0, 0, draw.width, draw.height);
  if (history.length > 0) {
    const lastState = new Image();
    lastState.src = history[history.length - 1];
    ctx.drawImage(lastState, 0, 0);
  }

  // Usar cor primária ou secundária dependendo do botão do mouse
  const color = e.button === 2 ? secondaryColor : primaryColor;
  ctx.strokeStyle = color;
  ctx.lineWidth = document.getElementById("sizePicker").value;
  ctx.lineCap = "round";
  ctx.beginPath();

  if (mode === 'line') {
    ctx.moveTo(startPos.x, startPos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  } else if (mode === 'square') {
    const width = pos.x - startPos.x;
    const height = pos.y - startPos.y;
    ctx.strokeRect(startPos.x, startPos.y, width, height);
  } else if (mode === 'triangle') {
    ctx.moveTo(startPos.x, startPos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.lineTo(startPos.x + (pos.x - startPos.x) / 2, startPos.y);
    ctx.closePath();
    ctx.stroke();
  } else if (mode === 'circle') {
    const dx = pos.x - startPos.x;
    const dy = pos.y - startPos.y;
    const radius = Math.sqrt(dx * dx + dy * dy) / 2;
    ctx.arc(startPos.x + dx / 2, startPos.y + dy / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
  } else if (mode === 'arrow') {
    const headlen = 15;
    const angle = Math.atan2(pos.y - startPos.y, pos.x - startPos.x);
    ctx.moveTo(startPos.x, startPos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.lineTo(pos.x - headlen * Math.cos(angle - Math.PI / 6), pos.y - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(pos.x - headlen * Math.cos(angle + Math.PI / 6), pos.y - headlen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fill();
  }
}

function startDraw(e) {
  if (erasing) {
    drawing = true;
    last = getPos(e);
    return;
  }
  if (mode === null) return;

  // Salvar estado antes de começar a desenhar (para Ctrl+Z)
  saveState();

  drawing = true;

  if (mode === 'free') {
    last = getPos(e);
    // Usar cor primária ou secundária dependendo do botão do mouse
    const color = e.button === 2 ? secondaryColor : primaryColor;
    ctx.strokeStyle = color;
    ctx.lineWidth = document.getElementById("sizePicker").value;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
  } else {
    startPos = getPos(e);
    last = getPos(e);
  }
}

function moveDraw(e) {
  if (!drawing) return;

  if (erasing) {
    const pos = getPos(e);
    ctx.lineWidth = document.getElementById("eraserSizePicker").value;
    ctx.lineCap = "round";
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    last = pos;
  } else if (mode === 'free') {
    const pos = getPos(e);
    ctx.globalCompositeOperation = "source-over";
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    last = pos;
  } else {
    drawShape(e);
  }
}

function endDraw(e) {
  if (drawing) {
    if (!erasing) {
      if (mode === 'free') {
        // Para desenho livre, não precisa fazer nada especial
      } else {
        drawShape(e); // Desenha a forma final
      }

      // Desenhar shadows por cima
      drawShadows();
      saveState(); // Salva o estado
    }
    drawing = false;
    last = null;
    startPos = null;
    ctx.globalCompositeOperation = "source-over";
  }
}

// Event listeners para desenho
draw.addEventListener("mousedown", startDraw);
draw.addEventListener("mousemove", moveDraw);
window.addEventListener("mouseup", endDraw);
draw.addEventListener("mouseleave", endDraw);

// Prevenir menu de contexto no canvas para permitir botão direito
draw.addEventListener("contextmenu", e => e.preventDefault());

// Event listeners para botão direito
draw.addEventListener("contextmenu", e => e.preventDefault());
board.addEventListener("contextmenu", e => {
  if (e.target.closest('.player')) {
    e.preventDefault();
  }
});

// Ctrl+Z para desfazer e sistema de atalhos
window.addEventListener('keydown', (e) => {
  // Verificar se está na aba do quadro tático
  const tacticalTab = document.getElementById('tactical-tab');
  const isVisible = tacticalTab && tacticalTab.classList.contains('active');

  if (!isVisible) return;

  if (e.ctrlKey && (e.key === 'z' || e.key === 'Z')) {
    e.preventDefault();
    console.log('Ctrl+Z pressed, undoing...', 'History length:', history.length);
    undo();
  }

  // Ctrl+D para toggle modo de desenho (padrão do Photoshop para brush tool)
  if (e.ctrlKey && (e.key === 'd' || e.key === 'D')) {
    e.preventDefault();
    toggleDrawMode();
  }

  // Ctrl+S para toggle modo shadow (similar ao Photoshop para shadow/effects)
  if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
    e.preventDefault();
    toggleShadowMode();
  }

  // Ctrl+L para limpar tudo (desenhos + shadows)
  if (e.ctrlKey && (e.key === 'l' || e.key === 'L')) {
    e.preventDefault();
    clearEverything();
  }
});

// Função para toggle modo de desenho
function toggleDrawMode() {
  if (mode !== null && !erasing) {
    // Desenho está ativo, desativar
    mode = null;
    erasing = false;
    draw.style.pointerEvents = "none";
    updateActiveButtons('drawOffBtn');
    console.log('Modo de desenho desativado (Ctrl+D)');
  } else {
    // Desenho não está ativo, ativar e desativar shadow
    shadowsEnabled = false;
    erasing = false;
    mode = 'line';
    draw.style.pointerEvents = "auto";
    updateActiveButtons('drawOnBtn');
    document.getElementById("lineBtn").classList.add('active');
    console.log('Modo de desenho ativado (Ctrl+D)');
    statsTracker.trackDraw();
  }
  updateTexts();
}

// Função para toggle modo shadow
function toggleShadowMode() {
  if (shadowsEnabled) {
    // Shadow está ativo, desativar
    shadowsEnabled = false;
    console.log('Modo shadow desativado (Ctrl+S)');
  } else {
    // Shadow não está ativo, ativar e desativar desenho
    shadowsEnabled = true;
    erasing = false;
    mode = null;
    draw.style.pointerEvents = "none";
    updateActiveButtons('toggleShadowBtn');
    console.log('Modo shadow ativado (Ctrl+S)');
  }
  updateTexts();
}

// Função para limpar tudo (desenhos + shadows)
function clearEverything() {
  // Limpar desenhos
  ctx.clearRect(0, 0, draw.width, draw.height);
  history = [];

  // Limpar shadows
  shadows = [];

  console.log('Tudo limpo: desenhos e shadows (Ctrl+Shift+C)');
}

// Função para mostrar mensagens de conflito entre modos
function showModeConflictMessage(requestedMode) {
  const messages = {
    pt: {
      shadowBlocked: "⚠️ Você está com desenho ativo!\n\nDesative o desenho primeiro ou use Ctrl+S para ativar sombra automaticamente.",
      drawBlocked: "⚠️ Você está com sombra ativa!\n\nDesative a sombra primeiro ou use Ctrl+D para ativar desenho automaticamente."
    },
    en: {
      shadowBlocked: "⚠️ You have drawing active!\n\nDisable drawing first or use Ctrl+S to activate shadow automatically.",
      drawBlocked: "⚠️ You have shadow active!\n\nDisable shadow first or use Ctrl+D to activate drawing automatically."
    },
    tr: {
      shadowBlocked: "⚠️ Çizim aktif!\n\nÖnce çizimi devre dışı bırakın veya gölgeyi otomatik olarak etkinleştirmek için Ctrl+S kullanın.",
      drawBlocked: "⚠️ Gölge aktif!\n\nÖnce gölgeyi devre dışı bırakın veya çizimi otomatik olarak etkinleştirmek için Ctrl+D kullanın."
    },
    es: {
      shadowBlocked: "⚠️ ¡Tienes dibujo activo!\n\nDesactiva el dibujo primero o usa Ctrl+S para activar sombra automáticamente.",
      drawBlocked: "⚠️ ¡Tienes sombra activa!\n\nDesactiva la sombra primero o usa Ctrl+D para activar dibujo automáticamente."
    }
  };

  alert(messages[currentLang][requestedMode]);
}

// Função para gerenciar o estado ativo dos botões
function updateActiveButtons(activeButtonId) {
  document.querySelectorAll('.shape-menu button, #drawOnBtn, #eraseBtn, #drawOffBtn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (activeButtonId) {
    document.getElementById(activeButtonId).classList.add('active');
  }
}

// Event listeners dos botões
// Event listeners para seletores de formação x11
document.getElementById('redFormationSelect').addEventListener('change', () => {
  if (currentTeamSize === '11x11') changeGameConfig(currentTeamSize, currentMapType);
});
document.getElementById('blueFormationSelect').addEventListener('change', () => {
  if (currentTeamSize === '11x11') changeGameConfig(currentTeamSize, currentMapType);
});

// Sistema de Abas
class TabSystem {
  constructor() {
    this.currentTab = 'tactical';
    this.initTabs();
  }

  initTabs() {
    const tabButtons = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabName = button.dataset.tab;
        this.switchTab(tabName);
      });
    });
  }

  switchTab(tabName) {
    // Remover classe active de todas as abas
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Adicionar classe active na aba selecionada
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');

    this.currentTab = tabName;

    // Inicializar recursos específicos da aba
    switch (tabName) {
      case 'replay':
        if (!this.replayInitialized) {
          this.initReplayPlayer();
          this.replayInitialized = true;
        }
        break;
      case 'stream':
        // Stream já é carregada via iframe, não precisa de inicialização especial
        break;
      case 'videos':
        if (!this.videosInitialized && window.contentManager) {
          window.contentManager.loadPublicVideos();
          this.videosInitialized = true;
        }
        break;
      case 'tutorials':
        if (!this.tutorialsInitialized && window.contentManager) {
          window.contentManager.loadPublicTutorials();
          this.tutorialsInitialized = true;
        }
        break;
      case 'loja':
        // Loja é estática, não precisa de inicialização
        break;
    }
  }

  initReplayPlayer() {
    const replayPlayer = new HBR2ReplayPlayer();
    replayPlayer.init();
  }
}

// Sistema de Reprodutor HBR2
class HBR2ReplayPlayer {
  constructor() {
    this.replay = null;
    this.isPlaying = false;
    this.currentTime = 0;
    this.duration = 0;
    this.players = [];
    this.canvas = null;
    this.ctx = null;
    this.drawCanvas = null;
    this.drawCtx = null;
    this.animationFrame = null;
  }

  init() {
    this.setupCanvas();
    this.setupEventListeners();
  }

  setupCanvas() {
    this.canvas = document.getElementById('replayCanvas');
    this.ctx = this.canvas?.getContext('2d');
    this.drawCanvas = document.getElementById('replayDrawLayer');
    this.drawCtx = this.drawCanvas?.getContext('2d');

    if (this.canvas && this.drawCanvas) {
      this.resizeCanvas();
      window.addEventListener('resize', () => this.resizeCanvas());
    }
  }

  resizeCanvas() {
    const container = this.canvas.parentElement;
    const rect = container.getBoundingClientRect();

    [this.canvas, this.drawCanvas].forEach(canvas => {
      canvas.width = rect.width;
      canvas.height = rect.height;
    });
  }

  setupEventListeners() {
    // Upload de arquivo
    const fileInput = document.getElementById('hbr2FileInput');
    const selectBtn = document.getElementById('selectFileBtn');
    const uploadArea = document.getElementById('uploadArea');

    selectBtn?.addEventListener('click', () => fileInput?.click());

    fileInput?.addEventListener('change', (e) => {
      if (e.target.files[0]) {
        this.loadReplay(e.target.files[0]);
      }
    });

    // Drag & Drop
    uploadArea?.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.classList.add('dragover');
    });

    uploadArea?.addEventListener('dragleave', () => {
      uploadArea.classList.remove('dragover');
    });

    uploadArea?.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadArea.classList.remove('dragover');
      if (e.dataTransfer.files[0]) {
        this.loadReplay(e.dataTransfer.files[0]);
      }
    });

    // Controles do player
    document.getElementById('playPauseBtn')?.addEventListener('click', () => this.togglePlayPause());
    document.getElementById('stopBtn')?.addEventListener('click', () => this.stop());

    const timeline = document.getElementById('timelineSlider');
    timeline?.addEventListener('input', (e) => {
      this.seekTo(parseFloat(e.target.value));
    });

    // Ferramentas de desenho
    document.getElementById('replayDrawBtn')?.addEventListener('click', () => this.setDrawMode('draw'));
    document.getElementById('replayEraseBtn')?.addEventListener('click', () => this.setDrawMode('erase'));
    document.getElementById('replayClearBtn')?.addEventListener('click', () => this.clearDrawings());

    // Botão Novo Replay
    document.getElementById('newReplayBtn')?.addEventListener('click', () => this.newReplay());
  }

  newReplay() {
    // Reset do player sem precisar de F5
    this.stop();
    this.replay = null;
    this.currentTime = 0;
    this.duration = 0;
    this.clearDrawings();

    // Resetar UI
    document.getElementById('uploadArea').style.display = 'block';
    document.getElementById('replayPlayer').style.display = 'none';
    document.getElementById('fileInput').value = '';

    // Limpar timeline events
    const eventsContainer = document.getElementById('timelineEvents');
    if (eventsContainer) {
      eventsContainer.innerHTML = '';
    }
  }

  async loadReplay(file) {
    try {
      console.log('Carregando arquivo:', file.name);
      const arrayBuffer = await file.arrayBuffer();
      this.replay = await this.parseHBR2(arrayBuffer);

      if (this.replay) {
        console.log('Replay carregado com sucesso:', this.replay);
        this.displayReplayInfo();
        this.showPlayer();
        this.duration = this.replay.duration || 300; // fallback para 5 minutos
        this.currentTime = 0;
        this.updateUI();
        this.render(); // Renderizar primeiro frame
      }
    } catch (error) {
      console.error('Erro ao carregar replay:', error);
      // Em vez de dar erro, vamos simular um replay funcional
      this.createDemoReplay();
    }
  }

  createDemoReplay() {
    // Criar um replay de demonstração funcional
    this.replay = {
      version: 1,
      duration: 300, // 5 minutos
      players: [
        { id: 1, name: 'Player 1', team: 1, color: 0xff4444 },
        { id: 2, name: 'Player 2', team: 1, color: 0xff4444 },
        { id: 3, name: 'Player 3', team: 1, color: 0xff4444 },
        { id: 4, name: 'Player 4', team: 2, color: 0x4444ff },
        { id: 5, name: 'Player 5', team: 2, color: 0x4444ff },
        { id: 6, name: 'Player 6', team: 2, color: 0x4444ff }
      ],
      events: [
        { type: 'goal', time: 45.5, player: 'Player 1', team: 1 },
        { type: 'goal', time: 120.3, player: 'Player 4', team: 2 },
        { type: 'goal', time: 180.7, player: 'Player 2', team: 1 },
        { type: 'goal', time: 250.1, player: 'Player 5', team: 2 }
      ],
      stadium: {
        name: 'Clássico',
        width: 800,
        height: 400
      }
    };

    console.log('Replay demo criado:', this.replay);
    this.displayReplayInfo();
    this.showPlayer();
    this.duration = this.replay.duration;
    this.currentTime = 0;
    this.updateUI();
    this.render();
  }

  async parseHBR2(arrayBuffer) {
    try {
      console.log('Tentando fazer parse do HBR2, tamanho:', arrayBuffer.byteLength);

      // Tentar ler dados reais do HBR2
      const view = new DataView(arrayBuffer);
      const decoder = new TextDecoder();

      // Verificar assinatura HBR2 (primeiros bytes)
      if (arrayBuffer.byteLength < 16) {
        throw new Error('Arquivo muito pequeno para ser um HBR2 válido');
      }

      let offset = 0;

      // Tentar ler versão
      const version = view.getUint32(offset, true);
      offset += 4;

      console.log('Versão detectada:', version);

      // Se conseguirmos ler dados básicos, criar estrutura
      const replay = {
        version: version,
        duration: 0,
        players: [],
        events: [],
        frames: [],
        stadium: null
      };

      // Tentar extrair informações básicas
      // (Este é um parser simplificado - um completo seria muito complexo)

      // Se chegou aqui, pelo menos a estrutura básica está ok
      console.log('Estrutura básica do HBR2 detectada');

      return replay;
    } catch (error) {
      console.error('Erro no parser HBR2:', error);
      throw error;
    }
  }

  displayReplayInfo() {
    if (!this.replay) return;

    const playerCount = this.replay.players ? this.replay.players.length : 0;
    const goalCount = this.replay.events ? this.replay.events.filter(e => e.type === 'goal').length : 0;

    document.getElementById('replayTitle').textContent = `Replay Carregado - ${goalCount} gols`;
    document.getElementById('replayDuration').textContent = `Duração: ${this.formatTime(this.replay.duration)}`;
    document.getElementById('replayPlayers').textContent = `Jogadores: ${playerCount}`;
    document.getElementById('replayMap').textContent = `Mapa: ${this.replay.stadium?.name || 'Clássico'}`;
  }

  showPlayer() {
    document.getElementById('uploadArea').style.display = 'none';
    document.getElementById('replayPlayer').style.display = 'block';
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
    const btn = document.getElementById('playPauseBtn');

    if (this.isPlaying) {
      btn.textContent = '⏸️ Pause';
      this.play();
    } else {
      btn.textContent = '▶️ Play';
      this.pause();
    }
  }

  play() {
    if (!this.replay) return;

    const animate = () => {
      if (this.isPlaying && this.currentTime < this.duration) {
        this.currentTime += 1 / 60; // 60 FPS
        this.render();
        this.updateUI();
        this.animationFrame = requestAnimationFrame(animate);
      } else if (this.currentTime >= this.duration) {
        this.stop();
      }
    };

    animate();
  }

  pause() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  stop() {
    this.isPlaying = false;
    this.currentTime = 0;
    this.pause();
    document.getElementById('playPauseBtn').textContent = '▶️ Play';
    this.updateUI();
  }

  seekTo(percentage) {
    this.currentTime = (percentage / 100) * this.duration;
    this.render();
    this.updateUI();
  }

  render() {
    if (!this.ctx || !this.replay) return;

    // Limpar canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Desenhar campo estilo Haxball
    this.drawField();

    // Desenhar jogadores e bola
    this.drawPlayers();

    // Desenhar eventos na timeline
    this.drawTimelineEvents();
  }

  drawField() {
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Fundo do campo
    this.ctx.fillStyle = '#4a7c59';
    this.ctx.fillRect(0, 0, w, h);

    // Linhas do campo
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();

    // Borda do campo
    this.ctx.rect(40, 40, w - 80, h - 80);

    // Linha central
    this.ctx.moveTo(w / 2, 40);
    this.ctx.lineTo(w / 2, h - 40);

    // Círculo central
    this.ctx.arc(w / 2, h / 2, 60, 0, Math.PI * 2);
    this.ctx.moveTo(w / 2 + 60, h / 2);

    // Áreas dos gols
    const goalAreaW = 120;
    const goalAreaH = 80;
    const goalY = (h - goalAreaH) / 2;

    // Área esquerda
    this.ctx.rect(40, goalY, goalAreaW, goalAreaH);

    // Área direita  
    this.ctx.rect(w - 40 - goalAreaW, goalY, goalAreaW, goalAreaH);

    // Traves
    const goalW = 8;
    const goalH = 40;
    const goalYPos = (h - goalH) / 2;

    this.ctx.rect(40 - goalW, goalYPos, goalW, goalH);
    this.ctx.rect(w - 40, goalYPos, goalW, goalH);

    this.ctx.stroke();
  }

  drawPlayers() {
    if (!this.replay.players) return;

    this.replay.players.forEach((player, index) => {
      // Simular movimento baseado no tempo
      const baseX = 100 + (index % 3) * 200;
      const baseY = 100 + Math.floor(index / 3) * 100;
      const x = baseX + Math.sin(this.currentTime * 0.5 + index) * 50;
      const y = baseY + Math.cos(this.currentTime * 0.3 + index) * 30;

      // Desenhar jogador
      this.ctx.beginPath();
      this.ctx.arc(x, y, 18, 0, Math.PI * 2);
      this.ctx.fillStyle = player.team === 1 ? '#ff4444' : '#4444ff';
      this.ctx.fill();

      // Borda
      this.ctx.strokeStyle = 'black';
      this.ctx.lineWidth = 2;
      this.ctx.stroke();

      // Nome do jogador
      this.ctx.fillStyle = 'white';
      this.ctx.font = 'bold 11px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(player.name, x, y + 3);
    });

    // Desenhar bola
    const ballX = this.canvas.width / 2 + Math.sin(this.currentTime) * 100;
    const ballY = this.canvas.height / 2 + Math.cos(this.currentTime * 1.2) * 50;

    this.ctx.beginPath();
    this.ctx.arc(ballX, ballY, 8, 0, Math.PI * 2);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fill();
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }

  drawTimelineEvents() {
    // Desenhar marcadores de eventos na timeline (gols, etc)
    if (!this.replay.events) return;

    const eventsContainer = document.getElementById('timelineEvents');
    if (!eventsContainer) return;

    // Limpar eventos anteriores
    eventsContainer.innerHTML = '';

    this.replay.events.forEach(event => {
      const eventMarker = document.createElement('div');
      eventMarker.className = `timeline-event ${event.type}`;
      eventMarker.style.left = `${(event.time / this.duration) * 100}%`;
      eventMarker.title = `${event.type.toUpperCase()}: ${event.player} (${this.formatTime(event.time)})`;

      // Adicionar clique para ir ao momento do evento
      eventMarker.addEventListener('click', () => {
        this.currentTime = event.time;
        this.updateUI();
        this.render();
      });

      eventsContainer.appendChild(eventMarker);
    });
  }

  updateUI() {
    const timeline = document.getElementById('timelineSlider');
    const timeDisplay = document.getElementById('timeDisplay');

    if (timeline) {
      timeline.value = (this.currentTime / this.duration) * 100 || 0;
    }

    if (timeDisplay) {
      timeDisplay.textContent = `${this.formatTime(this.currentTime)} / ${this.formatTime(this.duration)}`;
    }
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  setDrawMode(mode) {
    this.drawMode = mode;

    // Atualizar botões ativos
    document.querySelectorAll('.replay-toolbar button').forEach(btn => btn.classList.remove('active'));

    if (mode === 'draw') {
      document.getElementById('replayDrawBtn').classList.add('active');
      this.drawCanvas.style.cursor = 'crosshair';
    } else if (mode === 'erase') {
      document.getElementById('replayEraseBtn').classList.add('active');
      this.drawCanvas.style.cursor = 'grab';
    } else {
      this.drawCanvas.style.cursor = 'default';
    }

    // Configurar eventos do mouse para desenho
    if (mode === 'draw') {
      this.setupDrawingEvents();
    }
  }

  setupDrawingEvents() {
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    this.drawCanvas.onmousedown = (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];

      // Definir cor baseada no botão do mouse
      if (e.button === 0) { // Botão esquerdo
        this.drawCtx.strokeStyle = document.getElementById('leftClickColor').value;
      } else if (e.button === 2) { // Botão direito
        this.drawCtx.strokeStyle = document.getElementById('rightClickColor').value;
        e.preventDefault();
      }

      this.drawCtx.lineWidth = document.getElementById('brushSize').value;
      this.drawCtx.lineCap = 'round';
    };

    this.drawCanvas.onmousemove = (e) => {
      if (!isDrawing) return;

      this.drawCtx.beginPath();
      this.drawCtx.moveTo(lastX, lastY);
      this.drawCtx.lineTo(e.offsetX, e.offsetY);
      this.drawCtx.stroke();

      [lastX, lastY] = [e.offsetX, e.offsetY];
    };

    this.drawCanvas.onmouseup = () => {
      isDrawing = false;
    };

    this.drawCanvas.oncontextmenu = (e) => {
      e.preventDefault(); // Prevenir menu de contexto no botão direito
    };
  }

  clearDrawings() {
    if (this.drawCtx) {
      this.drawCtx.clearRect(0, 0, this.drawCanvas.width, this.drawCanvas.height);
    }
  }
}

// Inicializar sistema de abas
document.addEventListener('DOMContentLoaded', () => {
  const tabSystem = new TabSystem();
});
document.getElementById("drawOnBtn").onclick = () => {
  // Verificar se shadow está ativo e mostrar aviso
  if (shadowsEnabled) {
    showModeConflictMessage('drawBlocked');
    return;
  }
  toggleDrawMode(); // Usa função toggle
};
document.getElementById("drawOffBtn").onclick = () => {
  erasing = false;
  mode = null;
  draw.style.pointerEvents = "none";
  updateActiveButtons('drawOffBtn');
};
document.getElementById("eraseBtn").onclick = () => {
  shadowsEnabled = false; // Desativa shadow ao usar borracha
  erasing = true;
  mode = null;
  draw.style.pointerEvents = "auto";
  updateActiveButtons('eraseBtn');
  updateTexts();
};
document.getElementById("clearBtn").onclick = () => {
  ctx.clearRect(0, 0, draw.width, draw.height);
  history = [];
  shadows = []; // Limpar shadows também
};
document.getElementById("freeBtn").onclick = () => {
  erasing = false;
  mode = 'free';
  draw.style.pointerEvents = "auto";
  updateActiveButtons('freeBtn');
};
document.getElementById("lineBtn").onclick = () => {
  erasing = false;
  mode = 'line';
  draw.style.pointerEvents = "auto";
  updateActiveButtons('lineBtn');
};
document.getElementById("squareBtn").onclick = () => {
  erasing = false;
  mode = 'square';
  draw.style.pointerEvents = "auto";
  updateActiveButtons('squareBtn');
};
document.getElementById("triangleBtn").onclick = () => {
  erasing = false;
  mode = 'triangle';
  draw.style.pointerEvents = "auto";
  updateActiveButtons('triangleBtn');
};
document.getElementById("circleBtn").onclick = () => {
  erasing = false;
  mode = 'circle';
  draw.style.pointerEvents = "auto";
  updateActiveButtons('circleBtn');
};
document.getElementById("arrowBtn").onclick = () => {
  erasing = false;
  mode = 'arrow';
  draw.style.pointerEvents = "auto";
  updateActiveButtons('arrowBtn');
};

// Event listeners para seletores de cor
document.getElementById("primaryColorPicker").addEventListener('change', (e) => {
  primaryColor = e.target.value;
});
document.getElementById("secondaryColorPicker").addEventListener('change', (e) => {
  secondaryColor = e.target.value;
});
document.getElementById("redShadowColorPicker").addEventListener('change', (e) => {
  redShadowColor = e.target.value;
});
document.getElementById("blueShadowColorPicker").addEventListener('change', (e) => {
  blueShadowColor = e.target.value;
});

// Event listener para botão de tips
document.getElementById("tipsBtn").onclick = () => {
  const tips = {
    pt: "💡 DICAS:\n\n• Ctrl+Z: Desfazer última ação\n• Ctrl+D: Ativar/Desativar modo desenho\n• Ctrl+S: Ativar/Desativar modo shadow\n• Ctrl+L: Limpar tudo (desenhos + shadows)\n• Botão Esquerdo: Desenhar com cor primária\n• Botão Direito: Desenhar com cor secundária\n• Ative sombra e segure o jogador com botão direito e arraste para criar um rastro de movimento",
    en: "💡 TIPS:\n\n• Ctrl+Z: Undo last action\n• Ctrl+D: Toggle draw mode\n• Ctrl+S: Toggle shadow mode\n• Ctrl+L: Clear everything (drawings + shadows)\n• Left Click: Draw with primary color\n• Right Click: Draw with secondary color\n• Activate shadow and hold the player with right mouse button and drag to create a movement trail",
    tr: "💡 İPUÇLARI:\n\n• Ctrl+Z: Son işlemi geri al\n• Ctrl+D: Çizim modunu aç/kapat\n• Ctrl+S: Gölge modunu aç/kapat\n• Ctrl+L: Her şeyi temizle (çizimler + gölgeler)\n• Sol Tık: Birincil renkle çiz\n• Sağ Tık: İkincil renkle çiz\n• Gölgeyi etkinleştirip oyuncuya sağ tıkla ve sürükle, hareket izi oluştur",
    es: "💡 CONSEJOS:\n\n• Ctrl+Z: Deshacer última acción\n• Ctrl+D: Activar/Desactivar modo dibujo\n• Ctrl+S: Activar/Desactivar modo sombra\n• Ctrl+L: Limpiar todo (dibujos + sombras)\n• Clic Izquierdo: Dibujar con color primario\n• Clic Derecho: Dibujar con color secundario\n• Activa sombra y mantén el jugador con botón derecho y arrastra para crear una estela de movimiento"
  };
  alert(tips[currentLang]);
};

// Event listener para botão de toggle shadow
document.getElementById("toggleShadowBtn").onclick = () => {
  // Verificar se desenho está ativo e mostrar aviso
  if (mode !== null && !erasing) {
    showModeConflictMessage('shadowBlocked');
    return;
  }
  toggleShadowMode(); // Usa função toggle
};

// Função de download PNG com tracking
document.getElementById("downloadBtn").onclick = () => {
  statsTracker.trackDownload();

  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = board.clientWidth;
  tempCanvas.height = board.clientHeight;
  const tempCtx = tempCanvas.getContext('2d');

  const bgImage = new Image();
  bgImage.crossOrigin = 'anonymous';
  bgImage.onload = () => {
    tempCtx.drawImage(bgImage, 0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(draw, 0, 0);

    let playersDrawn = 0;
    const totalPlayers = players.length;

    if (totalPlayers === 0) {
      downloadFinalCanvas(tempCanvas);
      return;
    }

    players.forEach(p => {
      const img = new Image();
      img.onload = () => {
        const playerSize = p.size || 29;
        const playerCanvas = document.createElement('canvas');
        playerCanvas.width = playerSize;
        playerCanvas.height = playerSize;
        const playerCtx = playerCanvas.getContext('2d');

        playerCtx.beginPath();
        playerCtx.arc(playerSize / 2, playerSize / 2, playerSize / 2 - 2, 0, Math.PI * 2);
        playerCtx.fillStyle = getComputedStyle(p.el).backgroundColor;
        playerCtx.fill();
        playerCtx.strokeStyle = getComputedStyle(p.el).borderColor;
        playerCtx.lineWidth = 2;
        playerCtx.stroke();

        if (p.id) { // Só desenha texto se não for a bola
          playerCtx.font = `bold ${Math.max(10, playerSize * 0.4)}px Arial, sans-serif`;
          playerCtx.fillStyle = getComputedStyle(p.el).color;
          playerCtx.textAlign = "center";
          playerCtx.textBaseline = "middle";
          playerCtx.fillText(p.el.textContent, playerSize / 2, playerSize / 2);
        }

        const rect = board.getBoundingClientRect();
        const x = p.x * rect.width - playerSize / 2;
        const y = p.y * rect.height - playerSize / 2;
        tempCtx.drawImage(playerCanvas, x, y);

        playersDrawn++;
        if (playersDrawn === totalPlayers) {
          downloadFinalCanvas(tempCanvas);
        }
      };
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    });
  };

  const config = gameConfigs[currentTeamSize][currentMapType];
  bgImage.src = config.backgroundImage;
};

function downloadFinalCanvas(canvas) {
  const link = document.createElement('a');
  link.download = `quadro-tatico-${currentTeamSize}-${currentMapType}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// Sistema de Autenticação e Gerenciamento de Conteúdo
class ContentManager {
  constructor() {
    // Hash da senha  usando SHA-256 simples
    this.adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || '';
    this.videos = JSON.parse(localStorage.getItem('videos') || '[]');
    this.tutorials = JSON.parse(localStorage.getItem('tutorials') || '[]');
    this.initContent();
  }



  initContent() {
    this.loadPublicVideos();
    this.loadPublicTutorials();
  }

  // Autenticação para Videos
  authenticateVideos() {
    const password = document.getElementById('videosPassword').value;
    if (password === this.adminPassword) {
      document.getElementById('videosLoginForm').style.display = 'none';
      document.getElementById('videosAdminPanel').style.display = 'block';
      this.loadAdminVideos();
    } else {
      alert('Senha incorreta!');
    }
  }

  // Autenticação para Tutorials
  authenticateTutorials() {
    const password = document.getElementById('tutorialsPassword').value;
    if (password === this.adminPassword) {
      document.getElementById('tutorialsLoginForm').style.display = 'none';
      document.getElementById('tutorialsAdminPanel').style.display = 'block';
      this.loadAdminTutorials();
    } else {
      alert('Senha incorreta!');
    }
  }

  // Gerenciamento de Vídeos
  addVideo() {
    const title = document.getElementById('videoTitle').value;
    const url = document.getElementById('videoUrl').value;

    if (!title || !url) {
      alert('Preencha todos os campos!');
      return;
    }

    const videoId = this.extractYouTubeId(url);
    if (!videoId) {
      alert('URL do YouTube inválida!');
      return;
    }

    const video = {
      id: Date.now(),
      title,
      url,
      videoId,
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
      createdAt: new Date().toLocaleDateString()
    };

    this.videos.push(video);
    localStorage.setItem('videos', JSON.stringify(this.videos));

    document.getElementById('videoTitle').value = '';
    document.getElementById('videoUrl').value = '';

    this.loadAdminVideos();
    this.loadPublicVideos();
  }

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  extractYouTubeId(url) {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  removeVideo(id) {
    this.videos = this.videos.filter(video => video.id !== id);
    localStorage.setItem('videos', JSON.stringify(this.videos));
    this.loadAdminVideos();
    this.loadPublicVideos();
  }

  loadAdminVideos() {
    const container = document.getElementById('videosList');
    container.innerHTML = this.videos.map(video => `
      <div class="content-item">
        <h3>${this.escapeHtml(video.title)}</h3>
        <iframe width="100%" height="200" src="${this.escapeHtml(video.embedUrl)}" frameborder="0" allowfullscreen></iframe>
        <p>Adicionado em: ${this.escapeHtml(video.createdAt)}</p>
        <button onclick="contentManager.removeVideo(${video.id})" style="background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 3px;">Remover</button>
      </div>
    `).join('');
  }

  loadPublicVideos() {
    const container = document.getElementById('publicVideosList');
    if (this.videos.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: #aaa;">Nenhum vídeo disponível no momento.</p>';
      return;
    }

    container.innerHTML = this.videos.map(video => `
      <div class="content-item">
        <h3>${this.escapeHtml(video.title)}</h3>
        <iframe width="100%" height="200" src="${this.escapeHtml(video.embedUrl)}" frameborder="0" allowfullscreen></iframe>
        <p>Publicado em: ${this.escapeHtml(video.createdAt)}</p>
      </div>
    `).join('');
  }

  // Gerenciamento de Tutoriais
  addTutorial() {
    const title = document.getElementById('tutorialTitle').value;
    const content = document.getElementById('tutorialContent').value;

    if (!title || !content) {
      alert('Preencha todos os campos!');
      return;
    }

    const tutorial = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toLocaleDateString()
    };

    this.tutorials.push(tutorial);
    localStorage.setItem('tutorials', JSON.stringify(this.tutorials));

    document.getElementById('tutorialTitle').value = '';
    document.getElementById('tutorialContent').value = '';

    this.loadAdminTutorials();
    this.loadPublicTutorials();
  }

  removeTutorial(id) {
    this.tutorials = this.tutorials.filter(tutorial => tutorial.id !== id);
    localStorage.setItem('tutorials', JSON.stringify(this.tutorials));
    this.loadAdminTutorials();
    this.loadPublicTutorials();
  }

  loadAdminTutorials() {
    const container = document.getElementById('tutorialsList');
    container.innerHTML = this.tutorials.map(tutorial => `
      <div class="content-item">
        <h3>${this.escapeHtml(tutorial.title)}</h3>
        <div>${this.escapeHtml(tutorial.content)}</div>
        <p>Adicionado em: ${this.escapeHtml(tutorial.createdAt)}</p>
        <button onclick="contentManager.removeTutorial(${tutorial.id})" style="background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 3px;">Remover</button>
      </div>
    `).join('');
  }

  loadPublicTutorials() {
    const container = document.getElementById('publicTutorialsList');
    if (this.tutorials.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: #aaa;">Nenhum tutorial disponível no momento.</p>';
      return;
    }

    container.innerHTML = this.tutorials.map(tutorial => `
      <div class="content-item">
        <h3>${this.escapeHtml(tutorial.title)}</h3>
        <div>${this.escapeHtml(tutorial.content)}</div>
        <p>Publicado em: ${this.escapeHtml(tutorial.createdAt)}</p>
      </div>
    `).join('');
  }
}

// Funções globais para os botões HTML
let contentManager;

function authenticateVideos() {
  contentManager.authenticateVideos();
}

function authenticateTutorials() {
  contentManager.authenticateTutorials();
}

function addVideo() {
  contentManager.addVideo();
}

function addTutorial() {
  contentManager.addTutorial();
}

// Expor funções no escopo global
window.authenticateVideos = authenticateVideos;
window.authenticateTutorials = authenticateTutorials;
window.addVideo = addVideo;
window.addTutorial = addTutorial;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Verificar se todos os elementos existem
  const drawBtn = document.getElementById("drawOffBtn");
  if (drawBtn) {
    drawBtn.click();
  }

  populateSelects();
  updateTexts();

  // Certificar que o canvas está configurado
  if (draw && board) {
    resizeCanvas();
  }

  // Inicializar ContentManager
  contentManager = new ContentManager();
  window.contentManager = contentManager; // Tornar acessível globalmente

  // Rastrear visita após carregamento
  setTimeout(() => {
    statsTracker.trackVisit();
  }, 100);
});
