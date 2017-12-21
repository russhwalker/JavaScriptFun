var CoreFun = function () {

    var ulMain = document.createElement('ul');
    document.body.appendChild(ulMain);

    var textArea = document.createElement('textarea');
    textArea.style.width = "1000px";
    textArea.style.height = "1000px";
    document.body.appendChild(textArea);

    var logWebListItem = function (text, wrapperType) {
        var html = text || '';
        if (wrapperType) {
            var w = document.createElement(wrapperType);
            w.innerHTML = html;
            html = w.outerHTML;
        }
        var li = document.createElement('li');
        li.innerHTML = html;
        ulMain.appendChild(li);
    };

    var log = function (val) {
        if (typeof val === 'object') {
            textArea.value += JSON.stringify(val);
        } else {
            val = '' + val;
            textArea.value += val;
        }
    };
    var logBreak = function () {
        textArea.value += '\n';
    };
    var logSpace = function () {
        textArea.value += '  ';
    };
    var logLine = function () {
        textArea.value += '----------------------------------------------------';
        logBreak();
    };

    return {
        WebLog: logWebListItem,
        Log: log,
        LogBreak: logBreak,
        LogSpace: logSpace,
        LogLine: logLine
    };

}();
