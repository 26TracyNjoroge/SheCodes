function updateTime() {
    //Nairobi
    let nairobiElement = document.querySelector("#nairobi");
    let nairobiDateElement = nairobiElement.querySelector(".date");
    let nairobiTimeElement = nairobiElement.querySelector(".time");
    
    let nairobiCurrentTime = moment().tz("Africa/Nairobi");
    
    nairobiDateElement.innerHTML = nairobiCurrentTime.format("MMMM Do YYYY");
    nairobiTimeElement.innerHTML = nairobiCurrentTime.format("H:mm:ss [<small>]A[</small>]")  

    //Abuja
    let lagosElement = document.querySelector("#lagos");
    let lagosDateElement = lagosElement.querySelector(".date");
    let lagosTimeElement = lagosElement.querySelector(".time");
    
    let lagosCurrentTime = moment().tz("Africa/Lagos");
    
    lagosDateElement.innerHTML = lagosCurrentTime.format("MMMM Do YYYY");
    lagosTimeElement.innerHTML = lagosCurrentTime.format("H:mm:ss [<small>]A[</small>]")  
}

updateTime();
setInterval(updateTime, 1000);