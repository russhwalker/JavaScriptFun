CoreFun.PrintHeading('objectFun.js');

(function () {
    var obj = {
        id: 1
    };
    CoreFun.Print(obj);
    obj.someText = 'some object';
    obj.newObject = {
        id: 99
    };
    CoreFun.Print(obj);
})();