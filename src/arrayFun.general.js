CoreFun.PrintHeading('arrayFun.general.js');

(function () {

    var arraySorting = function () {
        var arr = ['d', 'z', 'm', 'a'];
        CoreFun.Print(arr);
        CoreFun.Print(arr.sort());
        var arrNumber = [3, 0, 12, 7, 9];
        CoreFun.Print(arrNumber);
        var arrNumberSorted = arrNumber.sort(function (a, b) {
            return a - b;
        });
        CoreFun.Print(arrNumberSorted);
    };

    var arrayOperators = function () {
        var arr = ['a', 'b', 'c', 'd'];
        arr.push('e');
        var last = arr.pop();
        CoreFun.Print(arr.join('~~~') + '   last: ' + last);
    };

    var arraySpliceSlice = function () {
        var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        CoreFun.Print(arr);
        arr.splice(1, 2);
        CoreFun.Print(arr);
        arr.splice(1, 0, 'x', 'y', 'z');
        CoreFun.Print(arr);
    };

    var arrayFilteringNumbers = function () {
        var arr = [1, 2, 3, 4, 5, 6];
        CoreFun.Print(arr);
        var arrFiltered = arr.filter(function (x) {
            return x % 2 === 0;
        });
        CoreFun.Print(arrFiltered);
    };

    var arrayFind = function () {
        var arr = [1, 2, 4, 6, 7, 14];
        var isEven = (x) => { return (x % 2) === 0; };
        var result = arr.find(isEven);
        CoreFun.Print(result);
    };

    var arrayIncludes = function () {
        var arr = [1, 2, 3];
        CoreFun.Print(arr.includes(2));
        CoreFun.Print(arr.includes(7));
    };

    var arraySome = function () {
        CoreFun.Print('--SOME--');
        var arr = [1, 2, 3, 4, 5];
        var findEven = function (element, index, array) {
            return (x % 2) === 0;
        }
        CoreFun.Print(arr.some(findEven));
        CoreFun.Print(arr.some(findEven));
    };

    CoreFun.PrintLine();
    arraySorting();
    CoreFun.PrintLine();
    arrayOperators();
    CoreFun.PrintLine();
    arraySpliceSlice();
    CoreFun.PrintLine();
    arrayFind();
    CoreFun.PrintLine();
    arrayIncludes();

    CoreFun.PrintBreak();
})();