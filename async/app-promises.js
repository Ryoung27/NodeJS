const users = [{
    id: 1,
    name: "Richie",
    schoolId: 101
}, {
    id: 2,
    name: "Kayla",
    schoolId: 101
}];
const grades = [];

const getUser = (id) =>{
    return new Promise((resolve, reject) => {
        const user = users.find((user) => {
            return user.id === id;
        });
    });
};