// Using require to get other files.................................................

// Using required files the normal way
const reqFromKidsJS = require('../kids')
console.log(reqFromKidsJS.kids)
console.log(reqFromKidsJS.ages);



// Using required files with distructuring
const {people, sum} = require('../people')
console.log(people)
console.log(sum)
 


// node built in for operating systems
const os = require('os');
console.log(os.platform())
console.log(os.homedir())
console.log(os.hostname())


