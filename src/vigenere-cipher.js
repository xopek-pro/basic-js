const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
//  isReverse;// = true;
  constructor(isDirect){
//    if (isReverse === undefined){
    if (isDirect == false){
      this.isReverse = true;  
    } else {
      this.isReverse = false;  
    }
  }

  encrypt(message, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if ((message === undefined) || (key === undefined)){
      throw('The message and key arguments are mandatory!')
    }
    let factor = message.length / key.length;
    let keyStr = key.repeat(Math.ceil(factor)).slice(0,message.length).toUpperCase();
    message = message.toUpperCase();
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let outStr = '';

    //  if (this.isReverse){
    //    message = message.split('').reverse.join('');
    // }
 

    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])){
        let index = alphabet.indexOf(message[i],0)+alphabet.indexOf(keyStr[i],0);
        index %= 26;
        outStr += alphabet[index];
      } else {
        outStr += message[i];
        keyStr = keyStr.slice(0, i) + message[i] + keyStr.slice(i);
      }
    }
  //  debugger
   if (this.isReverse){
    outStr = outStr.split('').reverse().join('');
  }
    return outStr;
  }    
  decrypt(message, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if ((message === undefined) || (key === undefined)){
      throw('The message and key arguments are mandatory!')
    }
    let factor = message.length / key.length;
    let keyStr = key.repeat(Math.ceil(factor)).slice(0,message.length).toUpperCase();
    message = message.toUpperCase();
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let outStr = '';

    // if (this.isReverse){
    //   message = message.split('').reverse.join('');
    // }


    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])){
        let index = alphabet.indexOf(message[i],0)-alphabet.indexOf(keyStr[i],0)+26;
        index %= 26;
        outStr += alphabet[index];
      } else {
        outStr += message[i];
        keyStr = keyStr.slice(0, i) + message[i] + keyStr.slice(i);
      }
    }
  //  debugger
    if (this.isReverse){
      outStr = outStr.split('').reverse().join('');
    }
    return outStr;
  }
}

module.exports = VigenereCipheringMachine;

//  debugger
// a = new VigenereCipheringMachine(true);
//  a = new VigenereCipheringMachine(false);
//  console.log(a.encrypt('attack at dawn!', 'alphonse'));
// should return 'AEIHQX SX DLLU!'

//console.log(a.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'));
// should return 'LEARN FRONTEND DEVELOPMENT :)'

// console.log(a.encrypt('cryptography', 'verylongkeyword'));
// should return 'XVPNECTXKTFU'