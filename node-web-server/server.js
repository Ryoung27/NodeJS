const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    // res.send("<h1>Hello Express!</h1>")
    res.send({
        name: "Richie",
        likes: [
            'Running',
            'yoga',
            'Being active'
        ]
    })
});

app.get('/about', (req,res) =>{
    res.send("<h1>We're in about.</h1>")
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: "Sorry baby, bad page design.",
    })
})

app.listen(3000);