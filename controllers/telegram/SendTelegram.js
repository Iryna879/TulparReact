const fetchs = require('cross-fetch');

exports.post = function (request, response) {
	console.log("Run POST");
	let Bot_token = "2109613420:AAGsIyZh3W2dD7nTnJAcLjJfNekh2_v1MGQ";
	let chatId = "1051137853";
	console.log("request",request.body)

	let message = encodeURI(request.body.body);
	let name = encodeURI(request.body.fullName);

	let body = `Tel:%20${request.body.tel}\nName:%20${name}\nMessage:%20${message}`;
	let url =	`https://api.telegram.org/bot${Bot_token}/sendMessage?chat_id=${chatId}&text=${body}`;
	fetchs(url)
		.then(res => res.json())
		.then(res => {
			console.log()})
		.catch(e => {
			console.log(e)})

	console.error(request.body);
	response.send(request.body) 
}
