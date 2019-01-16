console.log("Starting notes.js");

const fs = require('fs');

let addNote = (title, body) => {
    let notes = [];
    let note = {
        title: title,
        body: body
    };

    let notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);

    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let getAll = () => {
    console.log('Getting all notes');
}

let getNote = (title) => {
    console.log('Getting all: ', title);
}

let removeNote = (title) => {
    console.log('Removing note: ', title);
}

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
};

// console.log(module);
// module.exports.age = 28;

// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New Note';
// }

// module.exports.addition = (x, y) => {
//     return x + y;
// }

// module.exports.subtraction = (x, y) => {
//     return x - y;
// }

// module.exports.division = (x, y) => {
//     return x / y;
// }