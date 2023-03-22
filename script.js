
var output;

var myPlants = ["Rhapis excelsa", "Janet Craig"];
var myPlantsNoSpaces = [];
var outputArray = [];
var allPlantData = []
var searchPlantData;

//HTML ELEMENTS FOR JQUERY
var viewing = $("#viewing-pane");
// var userInput = $("#query");
var searchButton = $("#searchbutton");





// P A G E   S E T U P

// styling
function styling() {
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
	});
}



// base layout
function buildCardSection() {
	viewing.empty();
	var dashboard = $("<div>");
	var title = $("<h2>").text("My Plants:");
	dashboard.append(title);
	var cardSection = $("<div>");

	dashboard.append(cardSection);
	viewing.append(dashboard);
	return cardSection;
};





// rendering existing plants

//api call for existing plants
async function getMyPlantsData(myPlants) {
	//itterate through myPlants - will eventually come from local storage
	for (var i = 0; i < myPlants.length; i++) {
		let plant = myPlants[i];
		outputArray.push(await apiCall(plant));
		console.log(outputArray);
	};
	return outputArray;
};




	async function apiCall(plant) {
		//will become function so ajax api call only shown once
		plantQuery = plant.replace(/ /g, '%20');
		console.log(plantQuery);
		const settings = {
			"async": true,
			"crossDomain": true,
			"url": `https://house-plants2.p.rapidapi.com/search?query=${plantQuery}`,
			"method": "GET",
			"headers": {
				"X-RapidAPI-Key": "48a7f35cbbmsh1b5e31dc2bd27b6p1f4b21jsn3f4de91390bd",
				//old api key f19bef1971msh26d3d47e75ae9b0p129198jsn8f8e2369c658
				"X-RapidAPI-Host": "house-plants2.p.rapidapi.com"
			}
		}

		//testing to make sure url string is correct
		// console.log(settings.url)

		return $.ajax(settings).then(function (response) {
			console.log(response);
			outputArray = {
				name: response[0]['item']['Common name'][0],
				latinName: response[0]['item']['Latin name'],
				water: response[0]['item']['Watering'],
				maxTemp: response[0]['item']['Temperature max']['C'],
				minTemp: response[0]['item']['Temperature min']['C'],
				origin: response[0]['item']['Origin'][0],
				imageURL: response[0]['item']['Url'],
			};
			return outputArray;
			// console.log(outputArray[i])
		});
	};









// function renderMyPlants(AllPlantData, cardSection) {
// 	for (var i = 0; i < AllPlantData.length; i++) {
// 		console.log(`entry ${i}:`);
// 		cardSection = addPlantCard(AllPlantData[i], cardSection);
// 	}

// }

// // rendering the cards
// function addPlantCard(dataArray, cardSection) {
// 	var cardDiv = $("<div>");
// 	var plantTitle = $("<h3>").text(dataArray.name);
// 	var plantIMG = $("<img>").attr("src", dataArray.imageURL);
// 	var plantInfo = $("<div>");
// 	var latinName = $("<h4>").text(dataArray.latinName);
// 	var water = $("<h4>").text(dataArray.water);
// 	var plantOrigin = $("<h4>").text(`origin: ${dataArray.origin}`);

// 	//add text to info box
// 	plantInfo.append(latinName);
// 	plantInfo.append(water);
// 	plantInfo.append(plantOrigin);

// 	//assemble card
// 	cardDiv.append(plantTitle);
// 	cardDiv.append(plantIMG);
// 	cardDiv.append(plantInfo);

// 	//add card to the card deck
// 	cardSection.append(cardDiv);
// 	return cardSection;

// 	debugger;
// }
























// // A D D I N G   N E W   P L A N T S

// // called when user clicks search
// function addPlant() {
// 	var userInput = $("#query").val();
// 	console.log(userInput);

// 	myPlants.push(userInput);
// 	plantQuery = userInput.replace(/ /g, '%20');
// 	myPlantsNoSpaces.push(plantQuery);
// 	console.log(myPlantsNoSpaces);
// 	//then makes api call with searched plant
// 	debugger;
// 	findPlantData(plantQuery);


// };


async function buildApp() {
	cardSection = await buildCardSection();
	allPlantData = await getMyPlantsData(myPlants);
	console.log(allPlantData);
	// renderMyPlants(allPlantData, cardSection);
	// styling();
}





//MAIN CODE - waits until page has finished loading before running the following:
$(document).ready(function () {
	buildApp();
	// searchButton.on("click", addPlant);
})













// // display the plants as cards
// function dashboard(dataArray) {
// 	viewing.empty();

// 	var dashboard = $("<div>");
// 	var title = $("<h2>").text("My Plants:");
// 	dashboard.append(title);

// 	var cardSection = $("<div>");
// 	console.log(dataArray)
// 	for (var i = 0; i < myPlants.length; i++) {
// 		console.log(dataArray[i])
// 		var cardDiv = $("<div>");
// 		var plantTitle = $("<h3>").text(dataArray[i].name);
// 		var plantIMG = $("<img>").attr("src", dataArray[i].imageURL);

// 		var plantInfo = $("<div>");
// 		var plantOrigin = $("<h4>").text(`origin: ${dataArray[i].origin}`);

// 		plantInfo.append(plantOrigin);


// 		cardDiv.append(plantTitle);
// 		cardDiv.append(plantIMG);
// 		cardDiv.append(plantInfo);


// 		cardSection.append(cardDiv);



// 		dashboard.append(cardSection);
// 		viewing.append(dashboard);

// 		cardDiv.css({
// 			"display": "flex",
// 			"flex-direction": "column",
// 			"flex": "1 1 100px",
// 			"align-items": "center",
// 			"justify-content": "center",
// 			"min-height": "30vh",
// 			"background-color": "#333",
// 			"border-radius": "3rem",
// 			"color": "violet",
// 			"margin": "0.5rem",
// 			"padding": "0.75rem",
// 			"box-shadow": "10px 10px 20px rgba(0, 0, 0, 0.7)"
// 		});

// 		cardSection.css({
// 			"display": "flex",
// 			"background-color": "purple",
// 			"margin": "1rem",
// 			"padding": "1rem",
// 			"flex-direction": "horizontal",

// 		})


// 	}

// }




















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
