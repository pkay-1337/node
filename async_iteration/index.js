let fetch = require ('node-fetch');
let url = [ 'http://bihar.com', 'https://www.google.com']

async function get(uri){
	const res = await fetch(uri);
	const parsed = await res.text();
	return parsed;
}
async function* tati(){
	for(let i = 0; i < 2; i++){
		yield get(url[i]);
	}
}

( async function(){
	for await ( let data of tati()) {
		console.log(data);
	}
}());
	
