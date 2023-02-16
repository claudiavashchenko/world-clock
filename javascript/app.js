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

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let arrcity = cityTimeZone.split('/'); 
    let cityName = arrcity[1].replace(/_/g, " ") ; 
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <h2>${cityName}</h2>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        
    </div>
   
    <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
</div>
    `;
}


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);