/*
const express = require('express');
const app = express();
Det nedenunder er det samme bare på en linje */
const app = require("express")();
console.log(app);

//          route ( entire thing )
// HTTP Method.
//  |   endpoint    callback function
app.get("/", (req, res) => {
    res.send({message: "Our first route"});
});

let bicycleSpins = 0;
app.get("/spinthebicycle", (req, res) => {
    bicycleSpins += 1;
res.send({message: `The bicycle has been spun ${bicycleSpins} times.`});
});


app.get("/about", (req, res) => {
    res.send(`
    <h1>About</h1>
    <h3>blabla.</h3>
    `)
});

console.log("Server is running on port 8080");

app.listen(8080);