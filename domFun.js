var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = 'div { padding: 5px; border: solid 1px blue; }';
document.head.appendChild(style);

var wrapper = document.createElement('div');
wrapper.innerText = "my div";
document.body.appendChild(wrapper);