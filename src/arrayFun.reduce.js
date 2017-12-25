CoreFun.PrintHeading('arrayFun.reduce.js');

(function () {

    var arrayMultiDim = [[1, 1], [1, 2], [1, 3]];

    CoreFun.Print(arrayMultiDim);
    var arrayMultiDimReduced = arrayMultiDim.reduce(function (a, b) {
        return a.concat(b);
    });
    CoreFun.Print(arrayMultiDimReduced);

    var arrObjects = [{ id: 27, price: 15.45 }, { id: 3, price: 12.5 }, { id: 12, price: 3.25 }];
    var arrayReduceObjects = arrObjects.reduce(function (a, b) {
        return parseFloat(a) + parseFloat(b.price);
    }, 0);
    CoreFun.Print(arrayReduceObjects);

    CoreFun.PrintBreak();
})();