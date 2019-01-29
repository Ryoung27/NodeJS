const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');
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

app.listen(3000, () => {
    console.log("Server is up on port 3000.")
});