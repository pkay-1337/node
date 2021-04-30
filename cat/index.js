const fs = require('fs');
const source = '/home/pk/Downloads/pk';
const read = fs.createReadStream(source);
(async function pk(){
	let data = '';
	for await(let chunk of read){
		data += chunk.toString();
		console.log(data)
	}
}());
