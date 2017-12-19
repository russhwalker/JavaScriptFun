/******************************************************************************************** */
CoreFun.WebLog('1.', 'strong');
var myObject = function () {
};
myObject.sayName1 = function () {
    return "my name 1";
};
myObject.prototype.sayName2 = function () {
    return "my name 2";
};
CoreFun.WebLog(myObject.sayName1());
//CoreFun.WebLog(myObject.sayName2());//exception
CoreFun.WebLog(new myObject().sayName2());
/******************************************************************************************** */
CoreFun.WebLog('2.', 'strong');
function myObject2() {
    this.nameText = 'my name';
}
myObject2.sayName1 = function () {
    return this.nameText;
};
myObject2.prototype.sayName2 = function () {
    return this.nameText;
};
CoreFun.WebLog(myObject2.sayName1());
//CoreFun.WebLog(myObject2.sayName2());//exception
CoreFun.WebLog(new myObject2().sayName2());
/******************************************************************************************** */
CoreFun.WebLog('3.', 'strong');

/******************************************************************************************** */