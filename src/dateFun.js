CoreFun.PrintHeading('dateFun.js');

(function () {

    CoreFun.Print('Current Dates', 'strong');
    CoreFun.Print(new Date());
    CoreFun.Print(new Date().toUTCString());
    CoreFun.Print();

    CoreFun.Print('Date Parsing', 'strong');
    var d = '02/28/2017 12:30:00';
    CoreFun.Print('Raw Date: ' + d, 'strong');
    CoreFun.Print(new Date(d));
    CoreFun.Print(new Date(2017, 1, 28, 12, 30));
    CoreFun.Print(new Date(d).toDateString());
    CoreFun.Print(new Date(d).toLocaleString());
    CoreFun.Print(new Date(d).toLocaleDateString());
    CoreFun.Print(new Date(d).toLocaleTimeString());

    d = '2017-02-28T12:30:00';
    CoreFun.Print('Raw Date: ' + d, 'strong');
    CoreFun.Print(new Date(d));
    CoreFun.Print(new Date(d).toLocaleString());

    d = '2017-02-28T12:30:00Z';
    CoreFun.Print('Raw Date: ' + d, 'strong');
    CoreFun.Print(new Date(d));
    CoreFun.Print(new Date(d).toLocaleString());

    d = '2017-02-28T12:30:00+0000';
    CoreFun.Print('Raw Date: ' + d, 'strong');
    CoreFun.Print(new Date(d));//Invalid in IE 11
    CoreFun.Print(new Date(d).toLocaleString());//Invalid in IE 11
    CoreFun.Print();

    CoreFun.Print('Ellapsed Time', 'strong');
    var startDate = new Date(2017, 1, 1, 8);
    var endDate = new Date(2017, 1, 1, 11);
    var ellapsedTimeInMilliseconds = endDate - startDate;
    CoreFun.Print(ellapsedTimeInMilliseconds + ' milliseconds');
    CoreFun.Print(Math.floor(ellapsedTimeInMilliseconds / 3600000) + ' hours');
    CoreFun.Print();

})();