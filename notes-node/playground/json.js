// let obj = {
//     name: "Ronnie"
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Richie","age": 29}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
let originalNote = {
    title: "Some title",
    body: "Some body"
}

let originalNoteString = JSON.stringify(originalNote);
// console.log(typeof originalNoteString);
// console.log(originalNoteString);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);