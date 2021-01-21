/** @format */

"use strict";

// Using the file system to read, write, and delete files, work with directories as wee
const fs = require("fs");



// Reading Files
// The readFile() method is Asyncronous, so it will take some time to read the file
// The readFile() method takes 2 args (the file, call back function)
fs.readFile("../docs/document-1.txt", (err, data) => {
  if (err) console.log(err);
  console.log(data.toString());
});



// Writing Files
// The writeFile() method is Async
// The writeFile() method takes 2 args (the file the write, the text to write, call back func)
fs.writeFile("../docs/document-2.txt", "Fede Dawgy dawg", (err) => {
  if (err) console.log(err);
  console.log("file write success");
});



// Making directories
// The if statement is to check if the dir exitsts or not before creating it
if (!fs.existsSync("../extra-files")) { //if file does not exist
  fs.mkdir("../extra-files", (err) => { //mkdir() method for creating folders
    if (err) console.log(err);
    console.log("directory created");
  });
} else { //if it exists
  fs.rmdir('../extra-files', (err) => { //rmdir() method for deleting folders
    if (err) console.log(err)
    console.log('folder deleted')
  })
}



// Deleting files
// unlick() method takes 2 args, (file to delete, call back func)
if (fs.existsSync('../docs/deleteme.txt')) { //run if the file exists
  fs.unlink("../docs/deleteme.txt", (err) => {
    if (err) console.log(err);
    console.log("File deleted");
  });
}

