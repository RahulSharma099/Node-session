const express = require('express');

const app = express();
// var server = app.listen(5000, function() {
//     console.log('Node server is running..');
// });

app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send(__dirname + '/index.html');
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post("/submit", function(req, res) {
    var data = req.body.name;
    console.log(data);
    res.send("Your Task");
    res.end();
});

app.listen(2000, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Started on port 2000.');
});