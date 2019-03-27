CoreFun.PrintHeading('variableFun.js');

(function () {

    var printType = function(input) {
        CoreFun.Print('Type:' + typeof input);
    }

    var a = 'test a';
    CoreFun.Print(a);
    printType(a);

    b = 'test b';
    CoreFun.Print(b);
    printType(b);

    let c = 'test c';
    CoreFun.Print(c);
    printType(c);

    var d = true;
    CoreFun.Print(d);
    printType(d);

    var e;
    CoreFun.Print(e);
    printType(e);

})();