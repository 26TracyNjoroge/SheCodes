function updateTime() {
    //Nairobi
    let nairobiElement = document.querySelector("#nairobi");
    if (nairobiElement) {
        let nairobiDateElement = nairobiElement.querySelector(".date");
        let nairobiTimeElement = nairobiElement.querySelector(".time");
        
        let nairobiCurrentTime = moment().tz("Africa/Nairobi");
        
        nairobiDateElement.innerHTML = nairobiCurrentTime.format("MMMM Do YYYY");
        nairobiTimeElement.innerHTML = nairobiCurrentTime.format("H:mm:ss [<small>]A[</small>]")  
    }
   

    //Abuja
    let lagosElement = document.querySelector("#lagos");
    if (lagosElement) {
        let lagosDateElement = lagosElement.querySelector(".date");
        let lagosTimeElement = lagosElement.querySelector(".time");
        
        let lagosCurrentTime = moment().tz("Africa/Lagos");
        
        lagosDateElement.innerHTML = lagosCurrentTime.format("MMMM Do YYYY");
        lagosTimeElement.innerHTML = lagosCurrentTime.format("H:mm:ss [<small>]A[</small>]")  
    }
    
}



function updateCity(event) {
    let cityValue = event.target.value;
    if (cityValue === "current") {
        cityValue = moment.tz.guess();
    }
    let cityName = cityValue.replace("_", " ").split("/")[1];
    let cityTimeZone =moment().tz(cityValue);

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTimeZone.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTimeZone.format("H:mm:ss")} <small>${cityTimeZone.format("A")}</small></div>
    </div>
    `
}

updateTime();
setInterval(updateTime, 1000);

let countryEl = document.querySelector("#coutry");
countryEl.addEventListener("change", updateCity);


