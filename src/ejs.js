/** @format */

const express = require("express");

const app = express();

app.set('view engine', 'ejs') // to set the view engine to render ejs documents instead of html

app.listen(5001);

// Middleware and static files
app.use(express.static('public'))

app.get("/", (req, res) => {

  const blogs = [
    { title: "Blog 1", snippet: "lorem ipsum things that doesn't work" },
    { title: "Blog 2", snippet: "lorem ipsum things that doesn't work" },
    { title: "Blog 3", snippet: "lorem ipsum things that doesn't work" }
  ];

  res.render('index.ejs', {title: 'Home Town', blogs})
});

app.get('/about', (req, res) => {
  res.render('about.ejs', {title: 'About us'})
})

app.get('/blogs/create', (req, res) => {
  
  res.render('create.ejs', {title: 'create blog'})
})

app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/views/404.html')
})

