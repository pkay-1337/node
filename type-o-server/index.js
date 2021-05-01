const readline = require('readline');
const rl = readline.createInterface({input: process.stdin});
let input;
rl.on('line',(entered) => {
    input = entered;
    console.log(input)
})
