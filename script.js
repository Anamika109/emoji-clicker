let score = 0
let timer = 0
let timeLeft = 90
let playing = false
const points = document.getElementById("point")
const times = document.getElementById("time")
const starting = document.getElementById("start")
const scoring = document.getElementById("emoji")

starting.addEventListener("click", play)
scoring.addEventListener("click", add)
function play() {
    playing = true
    score = 0
    points.innerHTML = score
    timeLeft = 90
    times.innerHTML = timeLeft
    timer = setInterval(upTime, 1000) 
}

function upTime() {
    timeLeft = timeLeft - 1
    times.innerHTML = timeLeft
    if ( timeLeft === 0 ) {
        stopGame()
    }
}

function stopGame() {
    clearInterval(timer);
    playing = false
}

function add() {

    if ( playing === true ) {
        score ++
        points.innerHTML = score
    }

}