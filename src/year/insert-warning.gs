/*
We want an alert if and only if a new row is inserted
*/

function alertMessage(e) {
  if (e.changeType == "INSERT_ROW") {
    SpreadsheetApp.getUi().alert("Please don't insert rows like usual! You'll strip the formulas and complicate your life. To add a new category you should use Extras -> New Formatted Row instead. For a shortcut, you can do ALT + H, Page Right, Page Down, Enter");
  }
}
