const Http = new XMLHttpRequest();
const url = 'https://moes-taverne.ddns.net/api/';
var currentNumber;

getValue();

setInterval(function () {
    getValue();
}, 1000);

function getValue() {
    Http.open("GET", url + 'current-number', false);
    Http.send();
    var newNumber = Number(Http.responseText);
    if (currentNumber !== newNumber || typeof currentNumber === 'undefined') {
        document.getElementById("current-number").innerHTML = newNumber;
        currentNumber = newNumber;
        console.log(currentNumber + " " + newNumber)
    }

}

function increase() {
    Http.open("GET", url+ 'increase', false);
    Http.send();  

}

function decrease() {
    Http.open("GET", url+ 'decrease', false);
    Http.send();  

}

function reset() {
    Http.open("GET", url+ 'reset', false);
    Http.send();  

}