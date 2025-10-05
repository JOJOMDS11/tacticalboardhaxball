// Google Apps Script para contador global e CRUD de posts
// Cole este código em Ferramentas > Editor de Script da sua planilha Google

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Contador');
    var postsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Posts');
    var type = e.parameter.type || '';
    
    if (type === 'counter') {
      var count = Number(sheet.getRange('A1').getValue());
      if (isNaN(count)) count = 0;
      return createCorsResponse(JSON.stringify({success: true, count: count}));
    }
    
    if (type === 'posts') {
      var posts = postsSheet.getDataRange().getValues();
      var result = [];
      for (var i = 1; i < posts.length; i++) { // Skip header row
        if (posts[i][0]) { // Only if row has data
          result.push({
            tipo: posts[i][0],
            titulo: posts[i][1] || '',
            conteudo: posts[i][2] || '',
            url: posts[i][3] || ''
          });
        }
      }
      return createCorsResponse(JSON.stringify(result));
    }
    
    return createCorsResponse(JSON.stringify({success: true, message: 'OK'}));
  } catch (error) {
    return createCorsResponse(JSON.stringify({success: false, error: error.toString()}));
  }
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Contador');
    var postsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Posts');
    var type = e.parameter.type || '';
    
    if (type === 'counter') {
      var range = sheet.getRange('A1');
      var count = Number(range.getValue());
      if (isNaN(count)) count = 0;
      count++;
      range.setValue(count);
      SpreadsheetApp.flush(); // Force save
      return createCorsResponse(JSON.stringify({success: true, count: count}));
    }
    
    if (type === 'addpost') {
      var tipo = e.parameter.tipo || '';
      var titulo = e.parameter.titulo || '';
      var conteudo = e.parameter.conteudo || '';
      var url = e.parameter.url || '';
      
      if (tipo && titulo) {
        postsSheet.appendRow([tipo, titulo, conteudo, url]);
        SpreadsheetApp.flush(); // Force save
        return createCorsResponse(JSON.stringify({success: true, message: 'Post added'}));
      } else {
        return createCorsResponse(JSON.stringify({success: false, error: 'Missing required fields'}));
      }
    }
    
    return createCorsResponse(JSON.stringify({success: false, error: 'Unknown type'}));
  } catch (error) {
    return createCorsResponse(JSON.stringify({success: false, error: error.toString()}));
  }
}

// Função para lidar com requisições OPTIONS (preflight CORS)
function doOptions(e) {
  return createCorsResponse('');
}

// Função para criar resposta com CORS habilitado
function createCorsResponse(content) {
  return ContentService
    .createTextOutput(content)
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400'
    });
}
