// Google Apps Script para contador global e CRUD de posts
// Cole este código em Ferramentas > Editor de Script da sua planilha Google

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Contador');
  var postsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Posts');
  var type = e.parameter.type || '';
  if (type === 'counter') {
    var count = sheet.getRange('A1').getValue();
    return ContentService.createTextOutput(JSON.stringify({count: count})).setMimeType(ContentService.MimeType.JSON);
  }
  if (type === 'posts') {
    var posts = postsSheet.getDataRange().getValues();
    var result = posts.map(function(row) {
      return {tipo: row[0], titulo: row[1], conteudo: row[2], url: row[3]};
    });
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService.createTextOutput('OK');
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Contador');
  var postsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Posts');
  var type = e.parameter.type || '';
  if (type === 'counter') {
    var count = sheet.getRange('A1').getValue();
    count++;
    sheet.getRange('A1').setValue(count);
    return ContentService.createTextOutput(JSON.stringify({count: count})).setMimeType(ContentService.MimeType.JSON);
  }
  if (type === 'addpost') {
    var tipo = e.parameter.tipo || '';
    var titulo = e.parameter.titulo || '';
    var conteudo = e.parameter.conteudo || '';
    var url = e.parameter.url || '';
    postsSheet.appendRow([tipo, titulo, conteudo, url]);
    return ContentService.createTextOutput('OK').setMimeType(ContentService.MimeType.TEXT);
  }
  return ContentService.createTextOutput('OK');
}
