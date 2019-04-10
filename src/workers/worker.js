
onmessage = function (e) {
  let result = e.data[0] * e.data[1];

  if (isNaN(result)) {
    postMessage('Please write two numbers');
  } else {
    let workerResult = 'Result: ' + result;
    postMessage(workerResult);
  }
}