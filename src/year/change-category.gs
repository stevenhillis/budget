// global 
var ss = SpreadsheetApp.getActive();

/*
Expected solution:
Get a change object from onChange or onEdit (whichever receives the object) when an existing category name is change. 
Extract the old value and the new value.
Loop through urls; follow url and loop through all sheets. Loop each line in each sheet and if it matches the old value, change it to the new.
*/
