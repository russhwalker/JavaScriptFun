
/******************************************************************************************** */
var obj = {
    id: 1
};
log(JSON.stringify(obj));
obj.someText = 'some object';
obj.newObject = {
    id: 99
};
CoreFun.WebLog(JSON.stringify(obj));
/******************************************************************************************** */