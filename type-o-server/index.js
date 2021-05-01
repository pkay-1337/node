const ex = require('express');
const readline = require('readline');
const event = require('events');
const rl = readline.createInterface({input: process.stdin});
const app = ex();
let input;
const emitter = new event();









const port = 9999;
app.get('/', (req, res) => {
    if(req){
        (function(){ rl.on('line',(line) => {
            input = line;
            emitter.emit('typed');
        })
        pk = () => {res.end(input)};
        emitter.on('typed',()=>{
            pk();
        });}())
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
