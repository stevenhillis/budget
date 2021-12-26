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
