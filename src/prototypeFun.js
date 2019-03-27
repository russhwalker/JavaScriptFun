CoreFun.PrintHeading('prototypeFun.js');

(function () {
    CoreFun.PrintHeading('Object 1');

    var myObject = function () {
        this.someString = 'something';
    };    
    myObject.sayName1 = function () {
        return "name 1";
    };
    myObject.prototype.sayName2 = function () {
        return "name 2";
    };
    
    CoreFun.Print(myObject.sayName1());
    //CoreFun.Print(myObject.sayName2());//exception
    CoreFun.Print(new myObject().sayName2());    

    CoreFun.PrintLine('Proto Property new');
    CoreFun.Print(new myObject().prototype);
    CoreFun.Print(new myObject().__proto__);
    CoreFun.PrintLine('Proto Property');
    CoreFun.Print(myObject.prototype);
    CoreFun.Print(myObject.__proto__);

    CoreFun.PrintHeading('Object 2');
    
    function myObject2() {
        this.nameText = 'name';
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

    CoreFun.PrintLine('Proto Property new');
    CoreFun.Print(new myObject2().prototype);
    CoreFun.Print(new myObject2().__proto__);
    CoreFun.PrintLine('Proto Property');
    CoreFun.Print(myObject2.prototype);
    CoreFun.Print(myObject2.__proto__);    

})();