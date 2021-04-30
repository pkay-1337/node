const fs = require('fs');
/*let buffer = fs.readFileSync('file.txt','utf8');
fs.readFile('file.txt',(err,buffer) => {
	if (err){console.error(err)};
	console.log(buffer.toString());
});
*/
fs.createReadStream('file.txt','utf8').pipe(process.stdout)
