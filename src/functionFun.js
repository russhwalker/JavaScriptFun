
CoreFun.PrintHeading('functionFun.js');

(function () {
    var arrowFunction = (text) => {
        CoreFun.Print(text);
    };
    arrowFunction('arrow function works');

    var nonDefinedArguments = function () {
        var output = '';
        for (var i = 0; i < arguments.length; i++) {
            output += arguments[i] + ' ';
        }
        CoreFun.Print(output);
    };
    nonDefinedArguments(1, 'test', 3, { id: 1 });

    var restParameters = function (...someArgs) {
        CoreFun.Print(someArgs.join(' '));
    };
    restParameters(1, 2, "test", 4, { id: 1 });

})();