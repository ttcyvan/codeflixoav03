 const { duplicate } = require('./streambox.js');

 if (process.argv.length !== 3) {
     console.log('faux');
     process.exit(1)
 }

 const filename = process.argv[2]

 duplicate(filename);