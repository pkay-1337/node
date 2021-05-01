const ex = require('express');
const readline = require('readline');
const event = require('events');
const rl = readline.createInterface({input: process.stdin});
const app = ex();
const emitter = new event();
let input;
const port = 9999;

app.get('/', (req, res) => {
    if(req){
        rl.on('line',(line) => {
            input = line;
            emitter.emit('typed');
        })
        pk = () => {res.end(input)};
        emitter.on('typed',()=>{
            pk();
        });
    }
    res.on('error',(err)=>{
      let a = err;
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})