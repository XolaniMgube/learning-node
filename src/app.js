/** @format */

const express = require("express");

const app = express();

app.listen(5000);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', {root: __dirname}) // We add __dirname so that node doesn't refer to the computer root file but instead the root of the curent directory
})

// Permanent redirects
// For when you changed the page url name from "about-us" to just "about"
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

// The use() method 
// 404 Page
// This request will fire if none of the above requests match, that's how express works with outputting the 404 page
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/404.html");
})