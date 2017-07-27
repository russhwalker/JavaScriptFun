
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

log('Current Dates', 'strong');
log(new Date());
log(new Date().toUTCString());
log();

log('Date Parsing', 'strong');
var d = '02/28/2017 12:30:00';
log('Raw Date: ' + d, 'strong');
log(new Date(d));
log(new Date(2017, 1, 28, 12, 30));
log(new Date(d).toDateString());
log(new Date(d).toLocaleString());
log(new Date(d).toLocaleDateString());
log(new Date(d).toLocaleTimeString());

d = '2017-02-28T12:30:00';
log('Raw Date: ' + d, 'strong');
log(new Date(d));
log(new Date(d).toLocaleString());

d = '2017-02-28T12:30:00Z';
log('Raw Date: ' + d, 'strong');
log(new Date(d));
log(new Date(d).toLocaleString());

d = '2017-02-28T12:30:00+0000';
log('Raw Date: ' + d, 'strong');
log(new Date(d));//Invalid in IE 11
log(new Date(d).toLocaleString());//Invalid in IE 11
log();

log('Ellapsed Time', 'strong');
var startDate = new Date(2017, 1, 1, 8);
var endDate = new Date(2017, 1, 1, 11);
var ellapsedTimeInMilliseconds = endDate - startDate;
log(ellapsedTimeInMilliseconds + ' milliseconds');
log(Math.floor(ellapsedTimeInMilliseconds / 3600000) + ' hours');
log();