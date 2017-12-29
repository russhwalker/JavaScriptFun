CoreFun.PrintHeading('regexFun.js');

(function () {

    var runRegExTest = function (expr, input) {
        CoreFun.Print('' + expr + ' | ' + input);
        var regEx = new RegExp(expr);
        var match = regEx.test(input);
        CoreFun.Print(match);
        CoreFun.PrintLine();
    };

    runRegExTest(/abc/, 'f dsfa dsffds abcadsfd');
    runRegExTest(/abcq/, 'f dsfa dsffds abcadsfd');

    var runStringReplace = function (expr, input, replace) {
        CoreFun.Print('' + expr + ' | ' + input);
        var result = input.replace(expr, replace);
        CoreFun.Print(result);
        CoreFun.PrintLine();
    };

    runStringReplace(/run/, 'run fox run', 'walk');
    runStringReplace(/run/g, 'run fox run', 'walk');
    runStringReplace(/run/g, 'runwalkrun', 'walk');

    var runRegExMatches = function (expr, input) {
        CoreFun.Print('' + expr + ' | ' + input);
        var regEx = new RegExp(expr);
        var matches = regEx.exec(input);
        CoreFun.Print(matches);
        CoreFun.PrintLine();
    };

    runRegExMatches(/ab/g, 'aasdfabsadfsadabab');
    runRegExMatches(/aa/g, 'abaa bb aa aacd');

})();