// COMP3123 - Lab Exercise Week 4
// Le An Nguyen - 101292266
const log = whatever => console.log(whatever);
const SERVER_PORT = 3001;

const express = require('express');
const app = express();
// app.use(express.static('./statics'));

app.get('/', function (req, res) {
  res.send('<h1>Lab Exercise Week 4</h1><p>Le An Nguyen - 101292266</p><p>Feed-1:</p><a href="/user?firstname=Le%20An&lastname=Nguyen">/user?firstname=Le%20An&lastname=Nguyen</a><p>Feed-2:</p><a href="/user/Le%20An/Nguyen">/user/Le%20An/Nguyen</a>');
});
app.get('/hello', (req, res) => {
  res.send('<h1>Hello EXPRESS JS</h1>');
});
// For query string
app.get('/user', (req, res) => {
  var firstname = "unidentified";
  var lastname = "unidentified";
  var user_query = req.query;
  if (user_query.firstname) {
    firstname = user_query.firstname;
  }
  if (user_query.lastname) {
    lastname = user_query.lastname;
  }
  var output_user = {
    firstname: firstname,
    lastname: lastname
  }
  res.send(JSON.stringify(output_user));
});

app.get('/user/:fname/:lname', (req, res) => {
  var firstname = "unidentified";
  var lastname = "unidentified";
  var user_query = req.params;
  if (user_query.fname) {
    firstname = user_query.fname;
  }
  if (user_query.lname) {
    lastname = user_query.lname;
  }
  var output_user = {
    firstname: firstname,
    lastname: lastname
  }
  log("User has been sent through POST method");
  log(JSON.stringify(output_user));
  res.send("User has been sent through POST method");
});
app.post('/user/:fname/:lname', (req, res) => {
  var firstname = "unidentified";
  var lastname = "unidentified";
  var user_query = req.params;
  if (user_query.fname) {
    firstname = user_query.fname;
  }
  if (user_query.lname) {
    lastname = user_query.lname;
  }
  var output_user = {
    firstname: firstname,
    lastname: lastname
  }
  
  res.send(JSON.stringify(output_user));
});

app.listen(SERVER_PORT, () => {
    log(`Server started at http://localhost:${SERVER_PORT}/`);
});