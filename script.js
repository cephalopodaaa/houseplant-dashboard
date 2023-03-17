// The below code fills in the first row of the table
var category = "Fern";
var queryURL = "https://house-plants2.p.rapidapi.com/category/" + category + "&apikey=48a7f35cbbmsh1b5e31dc2bd27b6p1f4b21jsn3f4de91390bd";



// settings for API call
function getPlantData(e) {
  e.preventDefault()
}
listOfPlants = ["fern", "palm", "aloe vera"]


//api call
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://house-plants2.p.rapidapi.com/id/53417c12-4824-5995-bce0-b81984ebbd1d",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "f19bef1971msh26d3d47e75ae9b0p129198jsn8f8e2369c658",
		"X-RapidAPI-Host": "house-plants2.p.rapidapi.com"
	}
};
$.ajax(settings).done(function (response) {
    console.log(response);
    var CardDeck = document.getElementById(".card-deck");
    var Card = $("<div>");
    var Img = $("<img>");
    CardBody = $("<div>");
    CardTitle = $("<h5>");
    CardTitle.text(listOfPlants[i])
    CardDeck.append(Card);
    Card.append(Img, CardBody);






    document.getElementById("card-title").textContent = response["Common name"]

  })
    .catch(err => console.error(err));


// initial API call - Adam



// search bar
var userInput = document.querySelector("#query")
var button = document.querySelector("#searchbutton")
button.addEventListener("click", getPlantData)

const string = JSON.stringify(options);


// Adam's attempt at API call bens edit. successfully received a response. However, am struggling to call data from within the response.


// Weather API Fetch

const encodedParams = new URLSearchParams();
encodedParams.append("apiKey", "20fd700a8fmshaf893e7aac8fa88p12495ajs");
encodedParams.append("locationKey", "328328");

const newoptions = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '20fd700a8fmshaf893e7aac8fa88p12495ajsn02ca0c80868d',
    'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com'
  },
  body: encodedParams
};

fetch('https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


// Get location key by user.

var x = document.getElementById("locard");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}







/*  W E A T H E R    A P I  131250860830988b51dba3e6bb62323a  */


function weatherBalloon(cityID) {
  var key = '131250860830988b51dba3e6bb62323a';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
    .then(function (resp) { return resp.json() }) // Convert data to json
    .then(function (data) {
      drawWeather(data); // Call drawWeather
    })
    .catch(function () {
      // catch any errors
    });
}

window.onload = function () {
  weatherBalloon(6167865);
}



function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

  document.getElementById('description').innerHTML = d.weather[0].description;
  document.getElementById('temp').innerHTML = celcius + '&deg;';
  document.getElementById('location').innerHTML = d.name;
}



















function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");

  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "f146799a557e8ab658304c1b30cc3cfd";

  let latitude = 47.058700;
  let longitude = 15.457632;
  let url = api +
    "?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=" +
    apiKey +
    "&units=imperial";


  fetch(url)
    .then(response => response.json())
    .then(data => {
      var temp = data.main.temp;
      temp = (temp - 32) * 5 / 9;
      temp = temp.toFixed(1);
      temperature.innerHTML = temp + "° C";


      temperature.innerHTML = temp; // OUTPUT
      location.innerHTML = data.name; // OUTPUT
      description.innerHTML = data.weather[0].main; //OUTPUT
      temperature.innerHTML = temp;

      document.getElementById("weather-pic").src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
    });
}


getWeather();
