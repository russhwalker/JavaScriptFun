
var ulMain = document.createElement('ul');
document.body.appendChild(ulMain);

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

var restParamFunc = function (...someArgs) {
    for(var i = 0; i < someArgs.length; i++){
        var arg = someArgs[i];
        log(arg);
    }
};

restParamFunc(1,2,"got it",4,5);