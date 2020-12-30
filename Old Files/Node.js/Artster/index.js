const figlet = require('figlet');
const colors = require('colors');

figlet('BIG BLOCKY LETTERS', function (err,data){
    if(err){
        console.log('Something oopsd');
        console.dir(err);
        return;
    }
    console.log(data.cyan);
})