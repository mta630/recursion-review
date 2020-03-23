// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var str = '';

  var invalidArrList = ['undefined', 'function', 'symbol'];

  if (invalidArrList.includes(typeof obj)) {
    return 'null';
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  if (typeof obj === 'boolean') {
    str += obj;
  }

  if (typeof obj === 'number') {
    str += obj;
  }


  if (typeof obj === 'object' && !Array.isArray(obj)) {

    if ()
    for (let key in obj) {
      if () {
        str += stringifyJSON(key);
      }
      str += ':';
      str += stringifyJSON(obj[key]);

      if (key === Object.keys(obj).pop()){
        break;
      }

      str += ',';

    }
    return '{' + str + '}';
  }

  if (Array.isArray(obj)) {
    var arr = [];
    for (let i = 0; i < obj.length; i ++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return str += '[' + arr.join(',') + ']';
  }

  return str;
}
