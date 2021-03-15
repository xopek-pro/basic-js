const CustomError = require("../extensions/custom-error");

module.exports = 
function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  // debugger
  if(arr===undefined || !Array.isArray(arr)){throw('The argument is not an array!');}
  let result = [];
  let discardedIndexes = [];
  let nextElemDiscarded = false;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next': // исключает следующий за ней элемент исходного массива из преобразованного массива.     
//        i++;
        nextElemDiscarded = true;
      break;

      case '--discard-prev': // исключает предшествующий ей элемент исходного массива из преобразованного массива.
         if (!discardedIndexes.includes(i-1)){
          result.pop();
         }
      break;

      case '--double-next': // удваивает следующий за ней элемент исходного массива в преобразованном массиве.
        if ((i<=arr.length-2)){
          result.push(arr[i+1]);
        }
      break;
        
      case '--double-prev': // удваивает предшествующий ей элемент исходного массива в преобразованном массиве.
        if ((i>0) && (arr[i-1][0]!='-') && (!discardedIndexes.includes(i-1))){
          result.push(arr[i-1]);
        }
      break;

      default:
        if (!nextElemDiscarded) {
          result.push(arr[i]);
        } else {
          discardedIndexes.push(i);
          nextElemDiscarded = false;
        }
        break;
    }
    
  }
  return result;

};

//  console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));
// should return [1, 2, 3, 4, 5]

// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]));
// should return [1, 2, 3, 1337, 4, 5]
