const CustomError = require("../extensions/custom-error");

module.exports = 
function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  debugger
  str = '' + str;
  if (!(options.addition === undefined)) {
    options.addition = '' + options.addition;
    if (options.additionRepeatTimes === undefined){
      options.additionRepeatTimes=1;
    }
  }
  if (options.separator=='' || options.separator === undefined ){options.separator='+'}
  if (options.additionSeparator=='' || options.additionSeparator===undefined){options.additionSeparator='|'}
  

  let outString = str

  for (let i = 0; i < options.repeatTimes-1; i++) {
    if(options.additionRepeatTimes>0){
      outString += options.addition;
      for (let j = 0; j < options.additionRepeatTimes-1; j++) {
        outString = outString + options.additionSeparator + options.addition;
      }
    }
    outString =  outString + options.separator + str;    
  }
  
  if(options.additionRepeatTimes>0){
    outString += options.addition;
    for (let j = 0; j < options.additionRepeatTimes-1; j++) {
      outString = outString + options.additionSeparator + options.addition;
    }
  }

  return outString;
};

// console.log(repeater('12345', { repeatTimes: 5 }))
// should return '12345+12345+12345+12345+12345'

// console.log(repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }))
// should return la+sla+sla+

// console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' })
 // should return 'TESTstrADD!'
