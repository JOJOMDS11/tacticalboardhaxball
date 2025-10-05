// Google Apps Script SIMPLES - apenas contador
// Deploy como Web App: "Execute as: Me", "Who has access: Anyone"

function doGet(e) {
  return doPost(e); // Redirect GET to POST for simplicity
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Contador');
    if (!sheet) {
      // Create sheet if it doesn't exist
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Contador');
      sheet.getRange('A1').setValue(0);
    }
    
    var range = sheet.getRange('A1');
    var count = Number(range.getValue()) || 0;
    count++;
    range.setValue(count);
    
    // Simple response without CORS headers (handled by Netlify proxy)
    return ContentService
      .createTextOutput(JSON.stringify({success: true, count: count}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
