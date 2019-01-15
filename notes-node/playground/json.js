// let obj = {
//     name: "Ronnie"
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

let personString = '{"name": "Richie","age": 29}';
let person = JSON.parse(personString);
console.log(typeof person);
console.log(person);