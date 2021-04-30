const fetch = require ("node-fetch");
const readline = require('readline');
//fetch("https://www.google.com")
//	.then(res => res.text())
//	.then(body => console.log(body));
async function pk(url){
	let page = await fetch(url);
	page = await page.text();
	return page;
};

console.log(process.argv);
if (!process.argv[2]){
	const rl = readline.createInterface({
	  	input: process.stdin,
		output: process.stdout
	});

	rl.question('URL? ', (answer) => {
		pk(answer).then(res => console.log(res));
	        rl.close();

	});
} else {
	pk(process.argv[2]).then(res => console.log(res));
}
