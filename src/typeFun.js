CoreFun.PrintHeading('typeFun.js');

(function () {

    var printType = function(input) {
        CoreFun.Print('Type:' + typeof input);
    }

    CoreFun.PrintLine('some string');
    var someString = 'some string value';
    CoreFun.Print(someString);
    printType(someString);

    CoreFun.PrintLine('some integer');
    var someinteger = 7;
    CoreFun.Print(someinteger);
    printType(someinteger)

    CoreFun.PrintLine('some float/decimal');
    var someFloat = 3.457;
    CoreFun.Print(someFloat);
    printType(someFloat)

    CoreFun.PrintLine('someFunction');
    var someFunction = function () {
        this.someProperty = 'some value';
    };
    CoreFun.Print(someFunction);
    printType(someFunction);
    printType(someFunction.prototype);

    CoreFun.PrintLine('someOjbect');
    var someOjbect = {
        someProperty: 'some value'
    };
    CoreFun.Print(someOjbect);
    printType(someOjbect);

})();