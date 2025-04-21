let clock = document.querySelector(".clock")

function displayTime() {
    let currDate = new Date()
    clock.innerText = currDate.toLocaleTimeString()
}

setInterval(displayTime,1000)
