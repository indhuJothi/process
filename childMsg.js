const process = require("process");

process.on('message',(m)=>{
    console.log('Child got the message',m)
    process.exit(0)
})