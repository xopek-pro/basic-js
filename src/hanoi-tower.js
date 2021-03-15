const CustomError = require("../extensions/custom-error");

 module.exports = 
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  debugger
  let turns = Math.pow(2,disksNumber)-1;
  let seconds = Number(BigInt(turns*3600)/BigInt(turnsSpeed));
  return {
    turns: turns,
    seconds: seconds
    };
};


// console.log(calculateHanoi(5, 4074));
// should return {turns: 31, seconds: 27}

// console.log(calculateHanoi(38, 4594));
// should return {turns: 274877906943, seconds: 215402800390}
