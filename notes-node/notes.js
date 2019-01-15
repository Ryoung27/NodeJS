console.log("Starting notes.js");

let addNote = (title, body) => {
    console.log('Adding note', title, body)
};

module.exports = {
    addNote: addNote
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