const CustomError = require("../extensions/custom-error");

module.exports = 
function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
//  debugger
  let result = []
  if(members===undefined ||
    !Array.isArray(members)
    ){return false}
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i])=='string'){
      result.push(members[i].trim().charAt(0).toUpperCase())
    }    
  }
  return result.sort().join('');
};

//console.log(createDreamTeam(['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']));
// should return 'AABDEEGKPP'

// console.log(createDreamTeam([
//   ['David Abram'],
//   ['Robin Attfield'],
//   'Thomas Berry',
//   ['Paul R.Ehrlich'],
//   'donna Haraway',
//   ' BrIaN_gOodWiN  ',
//   {
//     0: 'Serenella Iovino'
//   },
//   'Erazim Kohak',
//   '  val_plumwood',
// ]));
// should return BDETV'