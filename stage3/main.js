function updateClock(clockID, hoursDiff){
    const time = new Date();
    const hours24 = (time.getHours() + hoursDiff) % 24;
    const hours12 = hours24 % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const clock = document.getElementById(clockID);

    let hourHand = clock.getElementsByClassName("hour")[0];
    hourHand.style.transform = "translateX(100px) rotate(" + rotateHand(hours12) + "deg)";

    clock.getElementsByClassName("am-pm")[0].innerHTML = hours24 > 12 ? "PM" : "AM";

     console.log(time, hours24, hours12, minutes, seconds);
    //console.log(hourHand.style);
}

function rotateHand(hour){
    return hour / 12 * 360;
}

updateClock("york", 0);
updateClock("sydney", 11);


