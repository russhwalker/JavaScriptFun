const first = document.querySelector('#number1');
const second = document.querySelector('#number2');
const result = document.querySelector('.result');

if (window.Worker) {
	console.log('web workers supported!!!');
	const myWorker = new Worker("worker.js");

	first.onchange = function () {
		myWorker.postMessage([first.value, second.value]);
		console.log('Message(first) posted to worker');
	}

	second.onchange = function () {
		myWorker.postMessage([first.value, second.value]);
		console.log('Message(second) posted to worker');
	}

	myWorker.onmessage = function (e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	}
} else {
	console.log('Your browser doesn\'t support web workers.')
}