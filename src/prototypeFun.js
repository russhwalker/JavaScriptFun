CoreFun.PrintHeading('prototypeFun.js');

(function () {
    CoreFun.PrintLine();
    var myObject = function () {
    };
    myObject.sayName1 = function () {
        return "my name 1";
    };
    myObject.prototype.sayName2 = function () {
        return "my name 2";
    };
    CoreFun.Print(myObject.sayName1());
    //CoreFun.Print(myObject.sayName2());//exception
    CoreFun.Print(new myObject().sayName2());


    CoreFun.PrintLine();
    function myObject2() {
        this.nameText = 'my name';
    }
    myObject2.sayName1 = function () {
        return this.nameText;
    };
    myObject2.prototype.sayName2 = function () {
        return this.nameText;
    };
    CoreFun.Print(myObject2.sayName1());
    //CoreFun.Print(myObject2.sayName2());//exception
    CoreFun.Print(new myObject2().sayName2());

    CoreFun.PrintLine();

})();