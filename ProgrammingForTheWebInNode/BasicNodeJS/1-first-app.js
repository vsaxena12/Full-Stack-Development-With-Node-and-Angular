console.log("Hello from Node.js");

const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hello from Node.js');

const amount = 50;

let compareNumber; 

setTimeout(() => {
    if(amount < 10)
        compareNumber = "smaller number"
    else
        compareNumber = "bigger number"
    
    fs.writeFileSync('hello.txt', compareNumber);
}, 10000);

fs.writeFileSync('hello.txt', 'Second Time');








