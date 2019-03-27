CoreFun.PrintHeading('objectFun.js');

(function () {

    var obj = {
        id: 1
    };
    CoreFun.Print(obj);

    obj.someText = 'some object';
    obj.someArr = [3, 45, 79];
    CoreFun.Print(obj);

    obj.newObject = {
        id: 99,
        subOjb: {
            innerId: 57
        }
    };
    CoreFun.Print(obj);

    CoreFun.PrintLine('rrr');

})();