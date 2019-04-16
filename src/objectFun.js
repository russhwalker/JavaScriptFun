CoreFun.PrintHeading('objectFun.js');

(function () {

    var obj = {
        id: 1
    };
    CoreFun.Print(obj);

    CoreFun.PrintLine();

    obj.someText = 'some object';
    obj.someArr = [3, 45, 79];
    CoreFun.Print(obj);

    CoreFun.PrintLine();

    obj.newObject = {
        id: 99,
        subOjb: {
            innerId: 57
        }
    };

    CoreFun.Print(obj);

})();

(function () {
    CoreFun.PrintLine();

    var obj1 = {
        name: 'my name field'
    };
    CoreFun.Print(obj1);
    CoreFun.Print(obj1.name);
    CoreFun.Print('has name property:' + obj1.hasOwnProperty('name'));
    CoreFun.PrintLine();
    var obj2 = Object.create(obj1);
    CoreFun.Print(obj2);
    CoreFun.Print(obj2.name);
    CoreFun.Print('has name property:' + obj2.hasOwnProperty('name'));

})();