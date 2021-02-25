
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0){
    return [];
  }

  sortedArray = new Array();
  matrix.forEach((element, index) => {
    if (index % 2 !== 0){
      Array.prototype.push.apply(sortedArray, element.reverse());
    } else {
      Array.prototype.push.apply(sortedArray, element);
    }
  });
  
  return sortedArray;
}
