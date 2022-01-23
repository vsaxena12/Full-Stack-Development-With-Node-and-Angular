"use strict";

// Global - No Windows
// _dirname - path to current directory
// _filename - path to current filename
// require - function to use modules
// modules - info about current module
// process - info about env where the program is being executed
console.log(__dirname);
console.log(__filename);
setTimeout(function () {
  console.log(__filename);
}, 5000);
setInterval(function () {
  console.log("Hello World");
}, 1000); // const ash = 'Ash'
// const vaar = 'Vaar'

var sayHi = function sayHi(names) {
  console.log("Hello ".concat(names));
}; //module.exports = { ash, vaar}


sayHi('Arjun');