let getUser = (id, callback) => {
    let user = {
        id: id,
        name: "Rich"
    };

    setTimeout(() =>{
        callback(user);
    }, 3000);
    callback(user);
};

getUser(1, (user) => {
    console.log(user);
});