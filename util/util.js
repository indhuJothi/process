//Util provide access to some utility functionality

const util = require('util');

async function sample(){
    return 'Hello world';
}

const callback = util.callbackify(sample);

callback((err,ret)=>{
    if(err){ throw new err}
        console.log(ret)
    
})
