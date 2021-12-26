class DefaultDict extends Object {
  constructor(getDefaultValue, ...objectConstructorArgs) {
    super(objectConstructorArgs);

    if (typeof getDefaultValue !== 'function') {
      throw new Error('getDefaultValue must be a function');
    }

    return new Proxy(this, {
      get: function(target, key) {
        if (!Reflect.has(target, key)) {
          Reflect.set(target, key, getDefaultValue(key));
        }

        return Reflect.get(target, key);
      },
    });
  }
};

function sumCategoriesOverSheets() {
  var ss = SpreadsheetApp.getActive();
  var allsheets = ss.getSheets();
  sums = new DefaultDict(() => 0);
  for(var s in allsheets) {
    var sheet = allsheets[s];
    if (sheet.getName() == "Choices")
      continue;
    var rows = sheet.getDataRange().getValues();
    rows.forEach(function(row, index) {
      if (index !== 0) {
        var cat = row[1];
        sums[cat] = sums[cat] + row[0];
      }
    });
  }
  return sums;
}
