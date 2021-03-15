const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.arr.length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    // debugger
    if(value===undefined) {
      this.arr.push('');
    } else {
      this.arr.push(value);
    }
    return this;
  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    // debugger
    if(position===undefined ||
      position < 1 ||
      position > this.arr.length ||
      isNaN(parseInt(position))
      ){
        this.arr = [];
        throw('The `position` argument is invalid!');
      } else{
        this.arr.splice(position-1, 1);
      }
    return this;
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.arr.reverse();
    return this;
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    // debugger
    outString = '';
    for (let i = 0; i < this.arr.length; i++) {
      outString += '( ' + this.arr[i] + ' )';
      outString += (i<(this.arr.length-1)) ? '~~' : '';
    }
    this.arr = [];
    return outString;
  }
};
//debugger
// console.log(chainMaker.addLink(5));
// console.log(chainMaker.addLink( 1 ).addLink('2nd').addLink('3rd').finishChain());
//  console.log(chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());
// should return '( 3rd )~~( function() {} )'

// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
// should return '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');

module.exports = chainMaker;
