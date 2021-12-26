// https://gist.github.com/develmaycare/4e72e72ae0be85a8efe7a525267afbc3

// global 
var ss = SpreadsheetApp.getActive();

function createTrigger() {
  ScriptApp.newTrigger("alertMessage").forSpreadsheet(ss).onChange().create();
}

function onOpen() {
  var menu = [
    {name:"New Formatted Row Below", functionName:"newRow"},
    {name:"Authorize Initialization", functionName:"createTrigger"},
    {name:"Initialize Sheet", functionName:"createTrigger"}
  ];
  ss.addMenu("Extras", menu);
}

/* Google Sheets does not copy formulas when inserting a row. Bogus.
While not exactly the same, this function duplicates the row, including the
formulas, and clears the cells in columns 1 & 2 of the new row.
*/
function newRow() {
  
  // Get the current sheet, row, and column.
  var sheet = ss.getActiveSheet();
  var row = ss.getActiveCell().getRow();
  var lastColumn = sheet.getLastColumn();
  
  // The range represents the current row from the first to last column.
  var range = sheet.getRange(row, 1, 1, lastColumn);
    
  // Insert a blank row after the current one.
  // insertRowsBefore was producing strange results. The exact same code with insertRowsAfter seems to work as expected.
  sheet.insertRowsAfter(row, 1);
  
  // Copy the current row to the row we just added. When contentsOnly is true, a "paste values" occurs. We want the functions, so it's set to false.
  range.copyTo(sheet.getRange(row + 1, 1, 1, lastColumn), {contentsOnly:false});
  
  // Clear the contents of columns 2 and 3 in the new row
  //getRange(row, col, numRows, numCols)
  new_range = sheet.getRange(row + 1, 2, 1, 2);
  new_range.clearContent();

}
