let hours = document.getElementById("hours")
let mins = document.getElementById("mins")
let secs = document.getElementById("secs")

setInterval(() =>{
    let currentTime = new Date()
    hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours()
    mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes()
    secs.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds()
}, 1000)