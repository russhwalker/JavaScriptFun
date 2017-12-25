CoreFun.PrintHeading('arrayFun.map.js');

(function () {

    var arr = [1, 2, 3, 4, 5, 6];

    CoreFun.Print(arr);
    var arrMapped = arr.map(function (x) {
        return x * 2;
    });
    CoreFun.Print(arrMapped);

    var arrMappedObjects = arr.map(function (x) {
        return {
            id: x,
            square: x * x
        };
    });
    CoreFun.Print(arrMappedObjects);

    CoreFun.PrintBreak();
})();