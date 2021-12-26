// global 
var ss = SpreadsheetApp.getActive();

function createTrigger() {
  ScriptApp.newTrigger("updateCategorySums").forSpreadsheet(SpreadsheetApp.getActive()).onEdit().create();
}

function onOpen() {
  var menu = [
    {name:"Authorize Initialization", functionName:"createTrigger"},
    {name:"Initialize Sheet", functionName:"createTrigger"}
  ];
  ss.addMenu("Extras", menu);
}


