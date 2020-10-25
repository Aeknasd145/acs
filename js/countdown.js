var countDownDate = new Date("2020/11/28 08:00:00").getTime();
var dayText	= "Day";
var hourText	= "Hour";
var minuteText	= "Minute";
var secondText	= "Second";
if (countDownDate){ 
	var x = setInterval(function() { 
		var now = new Date().getTime();
		var distance = countDownDate - now;
		if (distance < 0) {
			clearInterval(x);
			$("#countdown").html("Can't find any date for countdown!");
		}else { 
			
			var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds = Math.floor((distance % (1000 * 60)) / 1000),
				days = (days?'<div>'+days+' '+dayText+' ':''),
				hours = (hours?hours+' '+hourText+' ':''),
				minutes = (minutes?minutes+' '+minuteText+' ':''),
				seconds = (seconds?seconds+' '+secondText+'</div>':'');
			document.getElementById("countdown").innerHTML = days + hours + minutes + seconds;
		}
	}, 1000);
}