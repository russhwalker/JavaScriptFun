

var arrowFunction = (text) => {
    log(text);
};
arrowFunction('arrow function works');

var nonDefinedArguments = function () {
    var output = '';
    for (var i = 0; i < arguments.length; i++) {
        output += arguments[i] + ' ';
    }
    CoreFun.WebLog(output);
};
nonDefinedArguments(1, 'test', 3, { id: 1 });

var restParameters = function (...someArgs) {
    CoreFun.WebLog(someArgs.join(' '));
};
restParameters(1, 2, "test", 4, { id: 1 });