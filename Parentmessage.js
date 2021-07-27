const child = require('child_process');
const process = child.fork(`./childMsg`)
process.send('Hello world')