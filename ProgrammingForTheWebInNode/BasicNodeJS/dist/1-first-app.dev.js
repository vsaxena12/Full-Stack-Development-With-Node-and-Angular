"use strict";

console.log("Hello from Node.js");

var fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello from Node.js');
var amount = 50;
var compareNumber;
setTimeout(function () {
  if (amount < 10) compareNumber = "smaller number";else compareNumber = "bigger number";
  fs.writeFileSync('hello.txt', compareNumber);
}, 10000);
fs.writeFileSync('hello.txt', 'Second Time');