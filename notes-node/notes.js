console.log("Starting notes.js");

let addNote = (title, body) => {
    console.log('Adding note', title, body)
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