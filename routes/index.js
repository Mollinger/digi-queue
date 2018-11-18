var express = require('express');
var router = express.Router();

var currentNumber = 0;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/current-number', function (req, res, next) {
  res.json("Aktuelle Nummer: " + currentNumber);
});

router.get('/increase', function (req, res, next) {
  currentNumber++;  
  res.json("Number increased! " + currentNumber);
});

router.get('/decrease', function (req, res, next) {
  currentNumber--;
  res.json("Number decrease! " + currentNumber);
});

router.get('/reset', function (req, res, next) {
  currentNumber = 0;
  res.json("Number resetted");
});

module.exports = router;








/* var keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.end();
    //process.kill();
    console.log("test")
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();  */