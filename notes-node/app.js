//Require lets us load in module functionality.
const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes= require('./notes.js');


const argv = yargs
            .command('add', 'Add a new note.', {
                title:{
                    describe: 'Title of note.',
                    demand: true,
                    alias: 't'
                },
                body:{
                    describe: 'Body information.',
                    demand: true,
                    alias: 'b'
                }
            })
            .command('list', 'List all notes.')
            .command('read', 'Read a note.', {
                title: {
                    describe: 'Title of note',
                    demand: true,
                    alias: 'r'
                },
            })
            .help()
            .argv;
let command = argv._[0];


if (command === 'add'){
   let note = notes.addNote(argv.title, argv.body);
   if (note){
       console.log("Note created");
       notes.logNote(note);
   } else{
       console.log("Note title taken.");
   }
} else if (command === 'list'){
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read'){
    let note = notes.getNote(argv.title);
    if (note){
        console.log("Note read");
        notes.logNote(note);
    }else{
        console.log("Note not found.");
    };
} else if (command === 'remove'){
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found.'
    console.log(message)
} else {
    console.log('Command not found.');
}

// let filterArray = _.uniq(["Ronnie", "Ronnie", "Richie", "Richard", "Richard", "Young", "Young"])

// console.log(_.isString(true));
// console.log(_.isString("Ronnie"));
// console.log(_.uniq("RonnieRonnie RichardRichard YoungYoung"))
// console.log(filterArray);

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