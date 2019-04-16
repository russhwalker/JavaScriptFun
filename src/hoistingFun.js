CoreFun.PrintHeading('hoistingFun.js');

(function () {
    a = "aaaaa";
    var a
    CoreFun.Print(a);
})();

CoreFun.PrintLine();

(function () {
    CoreFun.Print(a);
    var a = "aaaaa";
})();

CoreFun.PrintLine();

(function () {
    test();

    var test;

    function test() {
        CoreFun.Print(1);
    }

    test = function () {
        CoreFun.Print(2);
    };
})();

CoreFun.PrintLine();

(function () {
    test();

    function test() {
        CoreFun.Print(1);
    }

    var test = function () {
        CoreFun.Print(2);
    };

    function test() {
        CoreFun.Print(3);
    }
})();