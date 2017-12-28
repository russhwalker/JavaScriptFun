CoreFun.PrintHeading("promiseFun.js");

(function () {

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

  var getNumberFail = new Promise(
    function (resolve, reject) {
      reject(new Error('bad number'));
    }
  );

  getNumberFail.then(function (result) {
      CoreFun.Print('Example3: ' + result);
    })
    .catch(function (error) {
      CoreFun.Print('Example3: ' + error.message);
    });
    
})();