/******************************************************************************************** */
var printItems = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        CoreFun.WebLog(arr[i]);
    }
};
var arrNumbers = [1, 2];
var arrObjects = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];
var arrMixed = [{ id: 1, name: 'a' }, 4, 'some text'];
/******************************************************************************************** */
CoreFun.WebLog('Arrays', 'strong');
/******************************************************************************************** */
CoreFun.WebLog('1.', 'strong');
CoreFun.WebLog(arrNumbers);
arrNumbers.forEach(function (i) {
    CoreFun.WebLog(i);
});
/******************************************************************************************** */
CoreFun.WebLog('2.', 'strong');
CoreFun.WebLog(arrObjects);
CoreFun.WebLog(JSON.stringify(arrObjects));
/******************************************************************************************** */
CoreFun.WebLog('3.', 'strong');
CoreFun.WebLog(arrMixed);
/******************************************************************************************** */
CoreFun.WebLog('4.', 'strong');
for (var i in { id: 1, name: 'a' }) {
    CoreFun.WebLog(i);
}
/******************************************************************************************** */
//ES2015
CoreFun.WebLog('5.', 'strong');
for (let i of arrNumbers) {
    CoreFun.WebLog(i);
}
/******************************************************************************************** */
CoreFun.WebLog('6.', 'strong');
var arr1 = [1, 2];
arr1.push(3);
CoreFun.WebLog(arr1);
var lastElement = arr1.pop();
CoreFun.WebLog(arr1);
CoreFun.WebLog(arr1.join('~~~'));
/******************************************************************************************** */
CoreFun.WebLog('7.', 'strong');
var arr2 = ['a', 'b', 'c', 'd'];
CoreFun.WebLog(arr2);
arr2.splice(1, 2);
CoreFun.WebLog(arr2);
arr2.splice(1, 0, 'x', 'y');
CoreFun.WebLog(arr2);
var arrSliced = arr2.slice(0, 2);
CoreFun.WebLog(arrSliced);
/******************************************************************************************** */
CoreFun.WebLog('8.', 'strong');
var arr3 = [1, 2, 3, 4, 5];
CoreFun.WebLog(arr3);
var arrFiltered = arr3.filter(function (x) {
    return x === 1 || x === 3;
});
CoreFun.WebLog(arrFiltered);
var arrMapped = arr3.map(function (x) {
    return x * 2;
});
CoreFun.WebLog(arrMapped);
/******************************************************************************************** */
CoreFun.WebLog('9.', 'strong');
CoreFun.WebLog(['c', 'b', 'q', 'a'].sort());
var arr4 = [3, 47, 1, 5, 2];
CoreFun.WebLog(arr4.sort());//wrong, sort with no function is only for strings
CoreFun.WebLog(arr4.sort(function (a, b) {
    return a - b;
}));
var arr5 = [{ id: 27, price: 15.45 }, { id: 3, price: 12.5 }, { id: 12, price: 3.25 }];
CoreFun.WebLog(JSON.stringify(arr5));
var arr5Sorted = arr5.sort(function (a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
});
CoreFun.WebLog(JSON.stringify(arr5Sorted));
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
