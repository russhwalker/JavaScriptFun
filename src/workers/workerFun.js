CoreFun.PrintHeading('workerFun.js');

(function () {
    if (window.Worker) {
        CoreFun.Print('Web Workers Supported!');

        const myWorker = new Worker("./workers/worker.js");

        myWorker.postMessage([1, 10]);
        CoreFun.Print('Web worker message sent.');

        myWorker.onmessage = function (e) {
            CoreFun.Print('Web Worker Result: ' + e.data);
        }
    } else {
        CoreFun.Print('Your browser doesn\'t support web workers.');
    }
})();