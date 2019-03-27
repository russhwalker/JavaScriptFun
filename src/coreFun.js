var CoreFun = function () {

    var textArea = document.createElement('textarea');
    textArea.style.width = "1000px";
    textArea.style.height = "1000px";
    document.body.appendChild(textArea);

    var print = function () {
        for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (Array.isArray(arg) || typeof arg === 'object') {
                textArea.value += JSON.stringify(arg, undefined, 1);
            } else {
                arg = '' + arg;
                textArea.value += arg;
            }
        }
        printBreak();
    };

    var printLine = function (heading) {
        if (heading) {
            textArea.value += '-----------' + heading + '-----------------';
        } else {
            textArea.value += '------------------------------------------';
        }
        printBreak();
    };

    var printHeading = function (input) {
        printLine();
        textArea.value += '||||||||||' + input + '|||||||||||||||||||||||||||||||||||||||||||||||||||||||||';
        printBreak();
        printLine();
    };

    var printBreak = function () {
        textArea.value += '\n';
    };

    return {
        PrintHeading: printHeading,
        Print: print,
        PrintLine: printLine,
        PrintBreak: printBreak
    };

}();