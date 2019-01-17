const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.command('add', 'Add a new note.', {
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
                }).help()
                   .argv;

let command = argv._[0];

if (command === 'add'){
    let note = notes.addNOte(argv.title, argv.body);
    if (note){
        console.log("Note created");
        notes.logNote(note);
    } else {
        console.log("note title taken.");
    }
} else if (command === 'read'){
    let note = notes.getNote(argv.title);
    if (note){
        console.log("Note read");
        notes.logNote(note);
    } else{
        console.log("Note not found.");
    };
} else if (command === 'remove'){
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found.'
    console.log(message)
} else {
    console.log('Command not found.');
}