

window.addEventListener("load", ()=> {
	let long;
	let lat;

	let temperatureDescription = document.querySelector(".temperature-description");
	let temperatureDegree = document.querySelector(".temperature-degree");
	let locationTimezone = document.querySelector(".location-timezone");
	let temperatureSection = document.querySelector(".temperature-section");
	const temperatureSpan = document.querySelector(".temperature-section span");

	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {

			long = position.coords.longitude;
			lat = position.coords.latitude;

			const proxy = `https://cors-anywhere.herokuapp.com/`;
			const api = `${proxy}https://api.darksky.net/forecast/55d2ad4624390801d63c4bbdd58e6f44/${long},${lat}`;

			fetch(api)
				.then(response => {return response.json()})
				.then(data => {
					const { temperature , summary, icon } = data.currently;
					// Set DOM elem from the API
					temperatureDegree.textContent = temperature;
					temperatureDescription.textContent = summary;
					locationTimezone.textContent = data.timezone;
					// Change Formula
					let celsius = Math.floor((temperature - 32) * ( 5 / 9 ));
					// Set Icon
					setIcons(icon, document.querySelector("#icon"));
					// Change F/C
					temperatureSection.addEventListener("click", ()=> {
						if (temperatureSpan.textContent === "F") {
							temperatureSpan.textContent = "C";
							temperatureDegree.textContent = celsius;
						} else {
							temperatureSpan.textContent = "F";
							temperatureDegree.textContent = temperature;
						}
					})
				})
				.catch(e => console.log(e.message));
		});
	}

	function setIcons(icon, iconID) {
		const skycons = new Skycons({color:"white"});
		const currentIcon = icon.replace(/-/g, "_").toUpperCase();
		skycons.play();
		return skycons.set(iconID, Skycons[currentIcon]);
	}

});