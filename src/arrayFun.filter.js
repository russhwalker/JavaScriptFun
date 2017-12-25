CoreFun.PrintHeading('arrayFun.filter.js');

(function () {

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

    CoreFun.Print(arr);
    var arrFiltered = arr.filter(function (x) {
        return x.firstname === 'John';
    });
    CoreFun.Print(arrFiltered);

    CoreFun.PrintBreak();
})();