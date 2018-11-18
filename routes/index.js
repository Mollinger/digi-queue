var express = require('express');
var router = express.Router();
var cors = require('cors')
var path = require('path');
var currentNumber = 0;

router.use(cors())
router.use(express.static('public'));

/* GET home page. */
router.get('/', function (req, res, next) {
  /* res.render('index', {
    number: currentNumber
  }); */
  //res.sendFile('public/html/digi-queue.html')
  res.sendFile(path.join(__dirname, '../public', 'html/digi-queue.html'));
});

router.get('/control', function (req, res, next) {
  /* res.render('index', {
    number: currentNumber
  }); */
  //res.sendFile('public/html/digi-queue.html')
  res.sendFile(path.join(__dirname, '../public', 'html/control.html'));
});

router.get('/api/current-number', function (req, res, next) {
  res.json(currentNumber);
});

router.get('/api/increase', function (req, res, next) {
  currentNumber++;
  res.json("Increased! " + currentNumber);
});

router.get('/api/decrease', function (req, res, next) {
  currentNumber--;
  if (currentNumber <= 0) {
    currentNumber = 0;
  }
  res.json("Decreased! " + currentNumber);
});

router.get('/api/reset', function (req, res, next) {
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