const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let newArr = arr;
    for (i = 0; i < newArr.length; i++) {
      if (newArr[i] === '--double-next') {
        if (newArr[i] == newArr.length - 1) {
          newArr.pop()
        }
        else {
          newArr[i] = newArr[i + 1]
        }
      }
      else if (newArr[i] === '--double-prev') {
        if (newArr[i] != newArr[0]) {
          newArr[i] = newArr[i - 1]
        }
        else {
          newArr.shift()
        }
      }
      else if (newArr[i] === '--discard-prev') {
        if (newArr[i] != newArr[0]) { newArr.splice(i - 1, 2) }
        else { newArr.splice(i, 1) }
      }
      else if (newArr[i] === '--discard-next') {
        if (newArr[i] != newArr.length - 1) {
          newArr.splice(i, 2)
        }
        else {
          newArr.pop()
        }
      }
    }
    return newArr;
  }
  else {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
}

module.exports = {
  transform
};
