const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = 
function dateSample(sampleActivity) {
//  throw new CustomError('Not implemented');
  // remove line with error and write your code here
//  debugger;
  if  (sampleActivity===undefined ||
       typeof(sampleActivity)!='string' ||
       sampleActivity <= 0 || 
       sampleActivity > 15 || 
       isNaN(parseInt(sampleActivity)) ||
       isNaN(parseFloat(sampleActivity))       
       ) {return false}
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)*HALF_LIFE_PERIOD/Math.LN2);
};


 //console.log(dateSample('12.10115029373225'));