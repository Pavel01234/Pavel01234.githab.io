
		/*

		20 Apr 2016 4:01 pm
		14 Sep 2017 9:44 am
		21 Sep 2017 7:21 pm
		26 Sep 2017 8:37 pm

		*/

		var lastRelease = '28 Sep 2017 11:49 pm UTC+3';

		function getTimeDifference(lastReleaseDate) {
			var t =  Date.parse(new Date()) - Date.parse(lastReleaseDate);

			var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor((t / 1000 / 60) % 60);
			var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
			var days = Math.floor(t / (1000 * 60 * 60 * 24));

			return {
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		}

		function initializeClock(id, lastReleaseDate) {
			var clock = document.getElementById(id);

			var daysCount = clock.querySelector('.days');
			var hoursCount = clock.querySelector('.hours');
			var minutesCount = clock.querySelector('.minutes');
			var secondsCount = clock.querySelector('.seconds');

			function updateClock() {
				var t = getTimeDifference(lastReleaseDate);

				daysCount.innerHTML = t.days;
				hoursCount.innerHTML = ('0' + t.hours).slice(-2);
				minutesCount.innerHTML = ('0' + t.minutes).slice(-2);
				secondsCount.innerHTML = ('0' + t.seconds).slice(-2);
			}

			updateClock();
			var timeinterval = setInterval(updateClock, 1000);
		}

		window.onload = function() {
			initializeClock('counter', new Date(lastRelease));
		}
