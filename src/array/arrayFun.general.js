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
        CoreFun.Print('--SPLICE--');
        var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        CoreFun.Print(arr);
        arr.splice(1, 2);
        CoreFun.Print(arr);
        arr.splice(1, 0, 'x', 'y', 'z');
        CoreFun.Print(arr);
    };

    var arrayFind = function () {
        CoreFun.Print('--FIND--');
        var arr = [1, 2, 4, 6, 7, 14];
        var isEven = (x) => { return (x % 2) === 0; };
        var result = arr.find(isEven);
        CoreFun.Print(result);
    };

    var arrayIncludes = function () {
        CoreFun.Print('--INCLUDES--');
        var arr = [1, 2, 3];
        CoreFun.Print(arr.includes(2));
        CoreFun.Print(arr.includes(7));
    };

    var arraySome = function () {
        CoreFun.Print('--SOME--');
        var arr = [1, 2, 3, 4, 5];
        var findEven = function (element, index, array) {
            return (element % 2) === 0;
        }
        CoreFun.Print(arr.some(findEven));
        CoreFun.Print(arr.some(findEven));
    };

    var arrayFill = function () {
        CoreFun.Print('--FILL--');
        var arr1 = [1, 2, 3, 4, 5];
        CoreFun.Print(arr1);
        CoreFun.Print(arr1.fill(7));
        var arr2 = [1, 2, 3, 4, 5];
        CoreFun.Print(arr2);
        CoreFun.Print(arr2.fill(7, 2, 4));
    };

    var arrayEvery = function () {
        CoreFun.Print('--EVERY--');

        var runEveryIsEven = function (x) {
            return (x % 2) === 0;
        };

        var arr1 = [2, 6, 74];
        CoreFun.Print(arr1);
        CoreFun.Print(arr1.every(runEveryIsEven));

        var arr2 = [2, 6, 74, 99];
        CoreFun.Print(arr2);
        CoreFun.Print(arr2.every(runEveryIsEven));
    };

    var arrayIndexOf = function () {
        CoreFun.Print('--INDEXOF--');

        var arr1 = ['a', 'b', 'c', 'd'];
        CoreFun.Print(arr1);
        CoreFun.Print(arr1.indexOf('c'));

        var arr2 = 'a,b,c,d'.split(',');
        CoreFun.Print(arr2);
        CoreFun.Print(arr2.indexOf('c'));
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
    CoreFun.PrintLine();
    arraySome();
    CoreFun.PrintLine();
    arrayFill();
    CoreFun.PrintLine();
    arrayEvery();
    CoreFun.PrintLine();
    arrayIndexOf();
    CoreFun.PrintLine();

    CoreFun.PrintBreak();
})();