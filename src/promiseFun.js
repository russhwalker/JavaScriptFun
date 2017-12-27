CoreFun.PrintHeading("promiseFun.js");

new Promise((resolve, reject) => {
    var val = 1;
    CoreFun.Print('Example1: ' + val);
    resolve(val);
  })
  .then((result) => {
    result++;
    CoreFun.Print('Example1: ' + result);
    //not a promise, can't resolve??
  })
  .then((x) => {
    CoreFun.Print('Example1: ' + 'last then: ' + x);
  });


var getNumber = new Promise(
  function (resolve, reject) {
    resolve(555);
    //reject(new Error('ERROR')); // reject
  }
);

// var incrementPrintNumber = new Promise(
//   function (resolve, reject) {
//     CoreFun.Print(resolve);
//     resolve++;
//     resolve(resolve);
//     CoreFun.Print(resolve);
//   }
// );

getNumber.then(function (result) {
    CoreFun.Print('Example2: ' + result);
    //incrementPrintNumber(result);
  })
  .catch(function (error) {
    CoreFun.Print(error.message);
  });

getNumber.then(function (result) {
    CoreFun.Print('Example2: ' + result);
    //incrementPrintNumber(result);
  })
  .catch(function (error) {
    CoreFun.Print(error.message);
  });