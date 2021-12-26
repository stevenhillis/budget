function updateCategorySums() {
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName("Choices");
  var rows = sheet.getDataRange().getValues();
  var sums = sumCategoriesOverSheets();
  rows.some(function(row, index) {
    var category = row[0];
    var cell = sheet.getRange(index + 1, 2)
    cell.setValue(sums[category]);
    console.log(`cat:  ${category}, val: ${sums[category]}`);
    return category === 'Zeroed';
  });
}
