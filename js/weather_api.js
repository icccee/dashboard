let api_key = "952814e96849fc16096abbe2a8bc7899";
let city ="vancouver";
let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+api_key+"&units=metric";




fetch(url, {
	"method": "GET",
})
.then(response => {
	console.log(response.json());
})
.catch(err => {
	console.error(err);
});