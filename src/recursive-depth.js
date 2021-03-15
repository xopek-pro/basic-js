const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //  throw new CustomError('Not implemented');
    // remove line with error and write your code here

    if (arr.filter((item) => Array.isArray(item)).length != 0) {
      return (
        1 +
        this.calculateDepth(
          [].concat(...arr.filter((item) => Array.isArray(item)))
        )
      );
    } else {
      return 1;
    }
  }
};

// debugger
//  a = new DepthCalculator;
//   console.log(a.calculateDepth([1, 2, 3, 4, 5, [1]]));
//  should return 2;

// console.log(a.calculateDepth([1,
//                               [8,
//                                 [
//                                   []
//                                 ]
//                               ],
//                               2,
//                               3,
//                               [8,
//                                 []
//                               ],
//                               4,
//                               5,
//                               ['6575',
//                                 ['adas',
//                                   ['dfg',
//                                     [0]
//                                   ]
//                                 ]
//                               ]
//                             ]))
//  should return 5
