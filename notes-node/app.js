console.log("Starting app.js.");

//Require lets us load in module functionality.
const fs = require('fs');
const os = require('os');
const notes= require('./notes.js');

let res = notes.addNote();
console.log(res);

// let user = os.userInfo();

// console.log(user.username);

// fs.appendFileSync('greetings.txt', 'Hello ' + user.username + "!");

// fs.appendFileSync('test.txt', `Hello ${user.username}. You are ${notes.age}!`);
// fs.appendFileSync('testapp.js', console.log("It worked!"));

// node testapp.js;