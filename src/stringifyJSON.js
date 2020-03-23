// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var str = '';
  var invalidArrList = ['undefined', 'function', 'symbol'];
  var test = (x) => !invalidArrList.includes(typeof x);

  if (invalidArrList.includes(typeof obj) || obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  if (typeof obj === 'boolean' || typeof obj === 'number') {
    str += obj;
  }


  if (typeof obj === 'object' && !Array.isArray(obj)) {

    for (let key in obj) {
      if (test(obj[key])) {
        str += stringifyJSON(key);
        str += ':';
        str += stringifyJSON(obj[key]);
      }

      if (key === Object.keys(obj).pop()) {
        break;
      }

      if (test(obj[key])) {
        str += ',';
      }

    }

    return '{' + str + '}';
  }

  if (Array.isArray(obj)) {
    var arr = [];
    obj.forEach(item => arr.push(stringifyJSON(item)));
    return str += '[' + arr.join(',') + ']';
  }

  return str;
};
