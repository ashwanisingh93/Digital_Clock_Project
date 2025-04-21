let clock = document.querySelector(".clock")

const option = {
    timeZone: 'Asia/kolkata',
    hours:'2-digit',
    minutes: '2-digit',
    second: '2-digit' 
}


function displayTime() {
    let currDate = new Date()
    clock.innerText = currDate.toLocaleTimeString('en-US',option)
}

setInterval(displayTime,1000)
