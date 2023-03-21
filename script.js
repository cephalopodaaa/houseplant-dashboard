// The below code fills in the first row of the table
var category = "Fern";
var queryURL = "https://house-plants2.p.rapidapi.com/category/" + category + "&apikey=48a7f35cbbmsh1b5e31dc2bd27b6p1f4b21jsn3f4de91390bd";

var output;
var outputArray = {};

var myPlants = ["Fern", "Palm", "grass", "flower"];

//HTML ELEMENTS FOR JQUERY
var viewing = $("#viewing-pane");


const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://house-plants2.p.rapidapi.com/all-lite",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "f19bef1971msh26d3d47e75ae9b0p129198jsn8f8e2369c658",
		"X-RapidAPI-Host": "house-plants2.p.rapidapi.com"
	}
};
$.ajax(settings).then(function (response) {
	console.log(response);
	output = {
		name: response[0]['Latin name'],
		imageURL: response[0]['Img'],
		origin: response[0]['Origin'][0]
	};

	for (var i = 0; i < myPlants.length; i++) {
		outputArray[i] = {
			name: response[i]['Latin name'],
			imageURL: response[i]['Img'],
			origin: response[i]['Origin'][0]
		}
	}

	dashboard(outputArray);
});




function dashboard(dataArray) {
	viewing.empty();

	var dashboard = $("<div>");
	var title = $("<h2>").text("My Plants:");
	dashboard.append(title);

	var cardSection = $("<div>");
	console.log(dataArray)
	for (var i = 0; i < myPlants.length; i++) {
		console.log(dataArray[i])
		var cardDiv = $("<div>");
		var plantTitle = $("<h3>").text(dataArray[i].name);
		var plantIMG = $("<img>").attr("src", dataArray[i].imageURL);

		var plantInfo = $("<div>");
		var plantOrigin = $("<h4>").text(`origin: ${dataArray[i].origin}`);

		plantInfo.append(plantOrigin);


		cardDiv.append(plantTitle);
		cardDiv.append(plantIMG);
		cardDiv.append(plantInfo);


		cardSection.append(cardDiv);



		dashboard.append(cardSection);
		viewing.append(dashboard);

		cardDiv.css({
			"display": "flex",
			"flex-direction": "column",
			"flex": "1 1 100px",
			"align-items": "center",
			"justify-content": "center",
			"min-height": "30vh",
			"background-color": "#333",
			"border-radius": "3rem",
			"color": "violet",
			"margin": "0.5rem",
			"padding": "0.75rem",
			"box-shadow": "10px 10px 20px rgba(0, 0, 0, 0.7)"
		});

		cardSection.css({
			"display": "flex",
			"background-color": "purple",
			"margin": "1rem",
			"padding": "1rem",
			"flex-direction": "horizontal",

		})


	}

}


// search bar
var userInput = document.querySelector("#query") ;
var button = document.querySelector("#searchbutton");
button.addEventListener("click", getPlantData);

const string = JSON.stringify(options);




















// // Weather API Fetch

// const encodedParams = new URLSearchParams();
// encodedParams.append("apiKey", "20fd700a8fmshaf893e7aac8fa88p12495ajs");
// encodedParams.append("locationKey", "328328");

// const newoptions = {
//   method: 'POST',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'X-RapidAPI-Key': '20fd700a8fmshaf893e7aac8fa88p12495ajsn02ca0c80868d',
//     'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com'
//   },
//   body: encodedParams
// };

// fetch('https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


// // Get location key by user.

// var x = document.getElementById("locard");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
// }







// /*  W E A T H E R    A P I  131250860830988b51dba3e6bb62323a  */


// function weatherBalloon(cityID) {
//   var key = '131250860830988b51dba3e6bb62323a';
//   fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
//     .then(function (resp) { return resp.json() }) // Convert data to json
//     .then(function (data) {
//       drawWeather(data); // Call drawWeather
//     })
//     .catch(function () {
//       // catch any errors
//     });
// }

// window.onload = function () {
//   weatherBalloon(6167865);
// }



// function drawWeather(d) {
//   var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
//   var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

//   document.getElementById('description').innerHTML = d.weather[0].description;
//   document.getElementById('temp').innerHTML = celcius + '&deg;';
//   document.getElementById('location').innerHTML = d.name;
// }



















// function getWeather() {
//   let temperature = document.getElementById("temperature");
//   let description = document.getElementById("description");
//   let location = document.getElementById("location");

//   let api = "https://api.openweathermap.org/data/2.5/weather";
//   let apiKey = "f146799a557e8ab658304c1b30cc3cfd";

//   let latitude = 47.058700;
//   let longitude = 15.457632;
//   let url = api +
//     "?lat=" +
//     latitude +
//     "&lon=" +
//     longitude +
//     "&appid=" +
//     apiKey +
//     "&units=imperial";


//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       var temp = data.main.temp;
//       temp = (temp - 32) * 5 / 9;
//       temp = temp.toFixed(1);
//       temperature.innerHTML = temp + "° C";


//       temperature.innerHTML = temp; // OUTPUT
//       location.innerHTML = data.name; // OUTPUT
//       description.innerHTML = data.weather[0].main; //OUTPUT
//       temperature.innerHTML = temp;

//       document.getElementById("weather-pic").src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
//     });
// }


// getWeather();
