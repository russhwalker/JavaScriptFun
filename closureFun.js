/******************************************************************************************** */
var closureFunc = function () {
    var id = 1;
    return function () {
        return id;
    };
};
CoreFun.WebLog(closureFunc().id);//can't access
CoreFun.WebLog(closureFunc()());
/******************************************************************************************** */
var closureFuncCallsInnerMethod = function () {
    var go = function () {
        CoreFun.WebLog('inside go');
    };
    go();
};
closureFuncCallsInnerMethod();
/******************************************************************************************** */
var closureFuncReturnsReferenceToFunction = function () {
    var go = function () {
        CoreFun.WebLog('inside go');
    };
    return go;
};
var c = closureFuncReturnsReferenceToFunction();
c();
/******************************************************************************************** */
var closureFuncExponent = function (a) {
    return function (b) {
        return Math.pow(a, b);
    };
};
var power10 = closureFuncExponent(10);
CoreFun.WebLog(power10(1) + ' | ' + power10(2));
var power2 = closureFuncExponent(2);
CoreFun.WebLog(power2(1) + ' | ' + power2(2));
/******************************************************************************************** */
var closureFunc2 = function () {
    var i = 1;
    var logIt = function (addIt) {
        i += addIt;
        CoreFun.WebLog(i);
    };
    i++;
    return logIt;
};
closureFunc2()(3);//5
closureFunc2()(3);//5
var cf2 = closureFunc2();
cf2(3);//5
cf2(3);//8
/******************************************************************************************** */