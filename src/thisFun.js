CoreFun.PrintHeading('thisFun.js');

(function () {
    function identify() {
        return 'My name is: ' + this.name.toUpperCase();
    }
    var me = {
        name: "russ"
    };
    CoreFun.Print(identify.call(me));
})();

CoreFun.PrintLine();

(function () {
    //With this scope this one won't work, the next one is in global scope so it does work.
    function test() {
        CoreFun.Print(this.s);
    }
    var s = 'my string';
    test();
})();

CoreFun.PrintLine();

{
    function test() {
        CoreFun.Print(this.s);
    }
    var s = 'my string';
    test();
}

CoreFun.PrintLine();