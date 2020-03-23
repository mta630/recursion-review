// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var dataType;
  var count = 0;
  console.log(json)
  if (typeof json === 'string') {
    return null;
  }


while (dataType !== undefined) {

    if (json.charAt(count) === '"') {
      dataType = 'string';
    } else if (json.charAt(count) === '{') {
      dataType = 'object';
    } else if (json.charAt(count) === '[') {
      dataType = 'array';
    }

    count ++;
  }

  // check what the first character is and that will determine the data type
  // " then its a string
  // { then its an object
  // [ then its an array
  // if its an empty space then skip to next character

  // once you figure out what it is, you have to get all of the data between



  function parseObj(data){
    var obj = {};
  }

  function parseArr(data){

  }

  function parseString(data){

  }


  return obj;
};
