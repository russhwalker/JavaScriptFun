CoreFun.PrintHeading('closureFun.js');

(function () {
    CoreFun.PrintLine();
    var closureFunc = function () {
        var id = 1;
        return function () {
            return id;
        };
    };
    CoreFun.Print(closureFunc().id);//can't access
    CoreFun.Print(closureFunc()());


    var closureFuncCallsInnerMethod = function () {
        var go = function () {
            CoreFun.Print('inside go');
        };
        go();
    };
    closureFuncCallsInnerMethod();


    CoreFun.PrintLine();
    var closureFuncReturnsReferenceToFunction = function () {
        var go = function () {
            CoreFun.Print('inside go');
        };
        return go;
    };
    var c = closureFuncReturnsReferenceToFunction();
    c();


    CoreFun.PrintLine();
    var closureFuncExponent = function (a) {
        return function (b) {
            return Math.pow(a, b);
        };
    };
    var power10 = closureFuncExponent(10);
    CoreFun.Print(power10(1) + ' | ' + power10(2));
    var power2 = closureFuncExponent(2);
    CoreFun.Print(power2(1) + ' | ' + power2(2));


    CoreFun.PrintLine();
    var closureFunc2 = function () {
        var i = 1;
        var logIt = function (addIt) {
            i += addIt;
            CoreFun.Print(i);
        };
        i++;
        return logIt;
    };
    closureFunc2()(3);//5
    closureFunc2()(3);//5
    var cf2 = closureFunc2();
    cf2(3);//5
    cf2(3);//8
})();