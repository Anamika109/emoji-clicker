let score = 0
let timer = 0
let timeLeft = 90
let playing = false
function play() {
    playing = true
    score = 0
    document.getElementById("point").innerHTML = score
    timeLeft = 90
    document.getElementById("time").innerHTML = timeLeft
    timer = setInterval(upTime, 1000) 
}

function upTime() {
    timer = timer + 1
    timeLeft = timeLeft - 1
    document.getElementById("time").innerHTML = timeLeft
    if ( timeLeft = 0 ) {
        stopGame()
    }
}

function stopGame() {

}