CoreFun.PrintHeading("asyncFun.js");

(function () {

    var getNumber = new Promise(
        function (resolve, reject) {
            resolve(555);
        }
    );

    async function getNumberAsync() {
        try {
            let result = await getNumber();
            CoreFun.Print('Example1: ' + result);
        } catch (e) {
            CoreFun.Print(e.message);
        }
    }

})();