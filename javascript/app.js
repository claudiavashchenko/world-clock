function updateTime() {
//Austin
let austinElement = document.querySelector("#austin");
let austinDateElement = austinElement.querySelector(".date");
let austinTimeElement = document.querySelector(".time");
let austinTime = moment().tz("America/Chicago");

austinDateElement.innerHTML = austinTime.format("MMMM Do, YYYY");
austinTimeElement.innerHTML = austinTime.format("h:mm:ss [<small>]A[</small>]");


//Los Angeles
let losAngelesElement = document.querySelector("#losAngeles");
let losAngelesDateElement = losAngelesElement.querySelector(".dateTwo");
let losAngelesTimeElement = document.querySelector(".timeTwo");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");


//New York
let newYorkElement = document.querySelector("#newYork");
let newYorkDateElement = newYorkElement.querySelector(".dateThree");
let newYorkTimeElement = document.querySelector(".timeThree");
let newYorkTime = moment().tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do, YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);