const users = [{
    id: 1,
    name: "Richie",
    schoolId: 101
}, {
    id: 2,
    name: "Kayla",
    schoolId: 102
}];
const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
}, {
    id: 2,
    schoolId: 102,
    grade: 100
}, {
    id: 3,
    schoolId: 102,
    grade: 100
}

];

const getUser = (id) =>{
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);

            if(user){
                resolve(user);
            } else{
                reject(`Unable to find user with id of ${id}.`);
            }
        });
};

const getGrades = (schoolId) =>{
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
};

const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempUser) => {
        user = tempUser;
        return getGrades(user.schoolId);
    }).then((grades) => {
        let average = 0;

        if(grades.length > 0){
            average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
        }
        return `${user.name} has a ${average}% in the class.`;
        console.log(average)
    })
};


// async await

const getStatusAlt = async (userId) => {
    // throw new Error('This is an error.');
    // return 'Richie';
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);
    let average = 0;

    if (grades.length > 0) {
        average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
    }
};

getStatusAlt().then((name) => {
    console.log(name);
}).catch((e) => {
    console.log(e);
})

// console.log(getStatusAlt());
// getStatus(2).then((status) => {
//     console.log(status);
// }).catch((e) => {
//     console.log(e)
// })