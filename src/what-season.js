const CustomError = require("../extensions/custom-error");

module.exports = 
function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  debugger
  if(date===undefined){return 'Unable to determine the time of year!'}
  if(isNaN(Date.parse(date))){throw('The `date` argument is invalid!');}
  if(Object.prototype.toString.call(date) != '[object Date]') {throw('The `date` argument is invalid!');}
//  console.log(date.getSeason);
  let month=date.getMonth();
//  switch (date.getMonth()) {
  switch (month) {
    case 0:
    case 1:
    case 11:
      return 'winter';
      break;
    case 2:
    case 3:
    case 4:
      return 'spring';
      break;
    case 5:
    case 6:
    case 7:
      return 'summer';
      break;
    case 8:
    case 9:
    case 10:
      return 'autumn';
      break;
        
    default:
      break;
  }
  //spring, лето — summer, осень — autumn (fall), зима — winter.
};


//console.log(getSeason(new Date(2025, 1, 22, 23, 45, 11, 500)));
// should return 'winter'

// const deeperFakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//       return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//       return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//       return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//       return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//       return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//       return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//       return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//       return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   }
// };

// Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));


// console.log(getSeason(deeperFakeDate));
