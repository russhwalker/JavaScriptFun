/******************************************************************************************** */
var arrNumbers = [1, 2, 3];

var printArray = function (arr, sameLine) {
    //ES2015
    /*for (let i of arr) {
        CoreFun.Log(i);
    }*/
    CoreFun.Log(JSON.stringify(arr));
    if (sameLine !== true) {
        CoreFun.LogBreak();
    }
};

var printArrayForEach = function (arr) {
    //ES2015
    arr.forEach(function (i) {
        CoreFun.Log(i);
    });
    CoreFun.LogBreak();
};

var arraySorting = function () {
    var arr = ['d', 'z', 'm', 'a'];
    printArray(arr);
    printArray(arr.sort());
    var arrNumber = [3, 0, 12, 7, 9];
    printArray(arrNumber);
    var arrNumberSorted = arrNumber.sort(function (a, b) {
        return a - b;
    });
    printArray(arrNumberSorted);
};

var arrayOperators = function () {
    var arr = ['a', 'b', 'c', 'd'];
    arr.push('e');
    var last = arr.pop();
    CoreFun.Log(arr.join('~~~') + '   last: ' + last);
    CoreFun.LogBreak();
};

var arraySpliceSlice = function () {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    printArray(arr);
    arr.splice(1, 2);
    printArray(arr);
    arr.splice(1, 0, 'x', 'y', 'z');
    printArray(arr);
};

var arrayFilteringNumbers = function () {
    var arr = [1, 2, 3, 4, 5, 6];
    printArray(arr);
    var arrFiltered = arr.filter(function (x) {
        return x % 2 === 0;
    });
    printArray(arrFiltered);
};

var arrayFilteringObjects = function () {
    var arr = [
        {
            id: 1,
            firstname: 'John',
            lastname: 'Doe'
        },
        {
            id: 2,
            firstname: 'Jane',
            lastname: 'Doe'
        },
        {
            id: 3,
            firstname: 'John',
            lastname: 'Smith'
        }];
    printArray(arr);
    var arrFiltered = arr.filter(function (x) {
        return x.firstname === 'John';
    });
    printArray(arrFiltered);
};

var arrayMapping = function () {
    var arr = [1, 2, 3, 4, 5, 6];
    printArray(arr);
    var arrMapped = arr.map(function (x) {
        return x * 2;
    });
    printArray(arrMapped);

    var arrMappedObjects = arr.map(function (x) {
        return {
            id: x,
            square: x * x
        };
    });
    printArray(arrMappedObjects);
};

var arrayReduce = function () {
    var arrayMultiDim = [[1, 1], [1, 2], [1, 3]];
    printArray(arrayMultiDim);
    var arrayMultiDimReduced = arrayMultiDim.reduce(function (a, b) {
        return a.concat(b);
    });
    printArray(arrayMultiDimReduced);
};

var arrayFind = function () {
    var arr = [1, 2, 4, 6, 7, 14];
    var isEven = (x) => { return (x % 2) === 0; };
    var result = arr.find(isEven);
    CoreFun.Log(result);
};

var arrayIncludes = function () {

};

/******************************************************************************************** */
CoreFun.LogLine();
printArray(arrNumbers);
CoreFun.LogLine();
printArrayForEach(arrNumbers);
CoreFun.LogLine();
arraySorting();
CoreFun.LogLine();
arrayOperators();
CoreFun.LogLine();
arraySpliceSlice();
CoreFun.LogLine();
arrayFilteringNumbers();
CoreFun.LogLine();
arrayFilteringObjects();
CoreFun.LogLine();
arrayMapping();
CoreFun.LogLine();
arrayReduce();
CoreFun.LogLine();
arrayFind();
CoreFun.LogLine();
arrayIncludes();
CoreFun.LogLine();


/******************************************************************************************** */
CoreFun.WebLog('10.', 'strong');
CoreFun.WebLog([1, 2, 3, 7, 10].reduce(function (a, b) {
    return a + b;
}, 0));
var arrayMultiDimFlattened = [[1, 1], [1, 2], [1, 3]].reduce(function (a, b) {
    return a.concat(b);
});
CoreFun.WebLog(arrayMultiDimFlattened);
var arrayReduceObjectWithArray = [{ id: 1, items: ['a', 'b'] }, { id: 2, items: ['c', 'd'] }, { id: 3, items: ['e', 'f'] }].reduce(function (a, b) {
    return [...a, ...b.items];//ES2016
}, '');
CoreFun.WebLog(arrayReduceObjectWithArray);
var arrayReduceObjects = [{ id: 27, price: 15.45 }, { id: 3, price: 12.5 }, { id: 12, price: 3.25 }].reduce(function (a, b) {
    return parseFloat(a) + parseFloat(b.price);
}, 0);
CoreFun.WebLog(arrayReduceObjects);
/******************************************************************************************** */
CoreFun.WebLog('11.', 'strong');
var isEven = (x) => { return (x % 2) === 0; };
CoreFun.WebLog([1, 2, 4, 6].find(isEven));
CoreFun.WebLog([1, 3, 7, 10].find(isEven));
/******************************************************************************************** */
//ES2016
CoreFun.WebLog('12.', 'strong');
CoreFun.WebLog([1, 2, 3].includes(2));
CoreFun.WebLog([1, 2, 3].includes(7));
/******************************************************************************************** */
