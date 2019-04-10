
onmessage = function (e) {
  for (let index = e.data[0]; index <= e.data[1]; index++) {
    setTimeout(() => {
      postMessage(index);
    }, index * 300);    
  }
}