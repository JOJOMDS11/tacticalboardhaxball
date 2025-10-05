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
      return ContentService.createTextOutput(JSON.stringify({success: true, count: count})).setMimeType(ContentService.MimeType.JSON);
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
      return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({success: true, message: 'OK'})).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()})).setMimeType(ContentService.MimeType.JSON);
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
      return ContentService.createTextOutput(JSON.stringify({success: true, count: count})).setMimeType(ContentService.MimeType.JSON);
    }
    
    if (type === 'addpost') {
      var tipo = e.parameter.tipo || '';
      var titulo = e.parameter.titulo || '';
      var conteudo = e.parameter.conteudo || '';
      var url = e.parameter.url || '';
      
      if (tipo && titulo) {
        postsSheet.appendRow([tipo, titulo, conteudo, url]);
        SpreadsheetApp.flush(); // Force save
        return ContentService.createTextOutput(JSON.stringify({success: true, message: 'Post added'})).setMimeType(ContentService.MimeType.JSON);
      } else {
        return ContentService.createTextOutput(JSON.stringify({success: false, error: 'Missing required fields'})).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({success: false, error: 'Unknown type'})).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}
