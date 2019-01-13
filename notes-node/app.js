console.log("Starting app.");

//Require lets us load in module functionality.
const fs = require('fs');
const os = require('os');

let user = os.userInfo();

// console.log(user.username);

// fs.appendFileSync('greetings.txt', 'Hello ' + user.username + "!");

fs.appendFileSync('test.txt', `Hello ${user.username}!`);
// fs.appendFileSync('testapp.js', console.log("It worked!"));

// node testapp.js;