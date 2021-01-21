'use strict'

//Streams and Buffers
/*This is to read for write data in a bit of chucks so that you don't wait for a long time for the whole file to load,
 but rather get the data in bits of chenks*/

const fs = require('fs');

// Reading Data in pieces of data
const readStream = fs.createReadStream('../docs/document-3.txt', {encoding: 'utf8'}) //utf8 encoding to turn data from buffer to string

readStream.on('data', (chunk) => {
    console.log('------- NEW CHUNK ----------')
    console.log(chunk)
})



// Writing Data in pieces of chunks
// Writing the data that we read
const writeStream = fs.createWriteStream("../docs/document-4.txt");

readStream.on("data", (chunk) => {
  writeStream.write('\nNEW CHUNK\n')
  writeStream.write(chunk)
});




// Piping
// Piping is an easy and short way of reading data from 1 file and write it to another
const pipingReadStream = fs.createReadStream('../docs/document-3.txt', 'utf8')
const pipingWriteStream = fs.createWriteStream('../docs/document-5.txt')
pipingReadStream.pipe(pipingWriteStream)
