console.log("Starting app.js.");

//Require lets us load in module functionality.
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes= require('./notes.js');

let filterArray = _.uniq(["Ronnie", "Ronnie", "Richie", "Richard", "Richard", "Young", "Young"])

console.log(_.isString(true));
console.log(_.isString("Ronnie"));
console.log(_.uniq("RonnieRonnie RichardRichard YoungYoung"))
console.log(filterArray);

// let finalProduct = notes.addition(3, 4);
// console.log(finalProduct);

// console.log(notes.subtraction(4, 1));

// console.log(notes.division(20, 5));

// let res = notes.addNote();
// console.log(res);

// let user = os.userInfo();

// console.log(user.username);

// fs.appendFileSync('greetings.txt', 'Hello ' + user.username + "!");

// fs.appendFileSync('test.txt', `Hello ${user.username}. You are ${notes.age}!`);
// fs.appendFileSync('testapp.js', console.log("It worked!"));

// node testapp.js;