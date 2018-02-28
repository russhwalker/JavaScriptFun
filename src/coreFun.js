var CoreFun = function () {

    var textArea = document.createElement('textarea');
    textArea.style.width = "1000px";
    textArea.style.height = "1000px";
    document.body.appendChild(textArea);

    var print = function (input, sameLine) {
        if (Array.isArray(input) || typeof input === 'object') {
            textArea.value += JSON.stringify(input);
        } else {
            input = '' + input;
            textArea.value += input;
        }
        if (sameLine !== true) {
            printBreak();
        }
    };

    var printHeading = function (input) {
        textArea.value += '||||||||||' + input + '|||||||||||||||||||||||||||||||||||||||||||||||||||||||||';
        printBreak();
    };

    var printBreak = function () {
        textArea.value += '\n';
    };
    var printLine = function () {
        textArea.value += '------------------------------------------';
        printBreak();
    };

    return {
        PrintHeading: printHeading,
        Print: print,
        PrintLine: printLine,
        PrintBreak: printBreak
    };

}();