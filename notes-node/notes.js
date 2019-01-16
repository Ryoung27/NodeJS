console.log("Starting notes.js");

const fs = require('fs');

let fetchNotes = () =>{
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e){
        return [];
    }
};

let saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title: title,
        body: body
    };
    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    };
    }



let getAll = () => {
    console.log('Getting all notes');
}

let getNote = (title) => {
    console.log('Getting all: ', title);
}

let removeNote = (title) => {
    //fetch notes
    let notes = fetchNotes();
    // filter out notes, removing the one with title of argument.
    let filteredNotes = notes.filter((note) => note.title !== title);
    //save new notes array.
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
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