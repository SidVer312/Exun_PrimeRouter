const e = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Go to /number to use application'));

app.get('/number/', function(req, res) {
    res.send('Go to /number/[YourNumber] to check if the number you entered is prime or composite');
});

app.get('/number/:num', function(req, res) {
    let num = req.params.num;
    var isPrime = "is a prime";

    if (num == 1) {
        isPrime = "is not a prime";
        res.send(`${num} is not prime or composite`);
    }

    else{
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
              isPrime = "is not a prime";
            }};
        res.send(`${num} ${isPrime}`);
    }})

app.listen(port, () => console.log('Application is running'));
console.log("listening on port " + port);
