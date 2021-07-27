//Exit event listener callback function will not work with async operations the exmaple as follows

process.on('exit',(code)=>{
    console.log('I am exiting because I am synchronous');
})

process.on('exit',(code)=>{
    setTimeout(()=>{
        console.log('I will not execute since I am the async function')
    },10)
})