// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  //create a variable (empty array) to store result
  var result = [];
  function loop(x) {
    if (x.classList && x.classList.contains(className)) {
      result.push(x);
    }
    if (x.hasChildNodes()) {
      x.childNodes.forEach(loop)
    }

  }

  loop(document.body);
  //return result
  return result;
};
