
CoreFun.WebLog('Current Dates', 'strong');
CoreFun.WebLog(new Date());
CoreFun.WebLog(new Date().toUTCString());
CoreFun.WebLog();

CoreFun.WebLog('Date Parsing', 'strong');
var d = '02/28/2017 12:30:00';
CoreFun.WebLog('Raw Date: ' + d, 'strong');
CoreFun.WebLog(new Date(d));
CoreFun.WebLog(new Date(2017, 1, 28, 12, 30));
CoreFun.WebLog(new Date(d).toDateString());
CoreFun.WebLog(new Date(d).toLocaleString());
CoreFun.WebLog(new Date(d).toLocaleDateString());
CoreFun.WebLog(new Date(d).toLocaleTimeString());

d = '2017-02-28T12:30:00';
CoreFun.WebLog('Raw Date: ' + d, 'strong');
CoreFun.WebLog(new Date(d));
CoreFun.WebLog(new Date(d).toLocaleString());

d = '2017-02-28T12:30:00Z';
CoreFun.WebLog('Raw Date: ' + d, 'strong');
CoreFun.WebLog(new Date(d));
CoreFun.WebLog(new Date(d).toLocaleString());

d = '2017-02-28T12:30:00+0000';
CoreFun.WebLog('Raw Date: ' + d, 'strong');
CoreFun.WebLog(new Date(d));//Invalid in IE 11
CoreFun.WebLog(new Date(d).toLocaleString());//Invalid in IE 11
CoreFun.WebLog();

CoreFun.WebLog('Ellapsed Time', 'strong');
var startDate = new Date(2017, 1, 1, 8);
var endDate = new Date(2017, 1, 1, 11);
var ellapsedTimeInMilliseconds = endDate - startDate;
CoreFun.WebLog(ellapsedTimeInMilliseconds + ' milliseconds');
CoreFun.WebLog(Math.floor(ellapsedTimeInMilliseconds / 3600000) + ' hours');
CoreFun.WebLog();