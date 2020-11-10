(function(){

	function displayTime(name){
		// get time obj
		let time = new Date();
		//today
		let today = time.toLocaleString('en-US',{year:'numeric',month:'numeric',day:'numeric'});
		//get date
		let dayOftoday = time.getDay();
		//week array
		const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		let dayOnPage = document.getElementById('dayOfToday');
		dayOnPage.textContent = week[dayOftoday];
		//get the hours in 24h format
		let currentHour = time.getHours();
		let currentTime = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second:'numeric',hour12: true });
		
		//display the time on the page
		let timeOnPage = document.getElementById('currentTime');
		timeOnPage.textContent = currentTime;

		let dateOnPage = document.getElementById('today');
		dateOnPage.textContent = today;

		setTimeout(function(){
			//iteration
			displayTime(name);
		},1000);

		// greeting
		let greetingTxt = document.getElementById("greeting");
		
		if (currentHour < 6){
			greetingTxt.textContent = `It is Midnight,Good Night,${name}!`;
			document.body.className ='midNight-bground';
		}else if (currentHour < 12){
			greetingTxt.textContent = `Good Morning,${name}!`;
			document.body.className ='morning-bground';
		}else if(currentHour < 17){
			greetingTxt.textContent = `Good Afternoon,${name}!`;
			document.body.className ='afternoon-bground';
		}else if(currentHour < 19){
			greetingTxt.textContent = `Good Afternoon,${name}!`;
			document.body.className ='sunset-bground';
		}
		else{
			greetingTxt.textContent = `Time to Sleep, Good night,${name}!`;
			document.body.className ='night-bground';
		}
		
	}
	displayTime("Ice");
})()