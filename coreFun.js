var CoreFun = function () {

    var log = function (text, wrapperType) {
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

    return {
        log: log
    };

}();