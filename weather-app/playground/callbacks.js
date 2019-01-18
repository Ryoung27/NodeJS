let getUser = (id, callback) => {
    let user = {
        id: id,
        name: "Rich"
    };
    callback(user);
};

getUser(1, (user) => {
    console.log(user);
});