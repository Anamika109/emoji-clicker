let score = 0
let timer = 0
let timeLeft = 20
let playing = false
const points = document.getElementById("point")
const times = document.getElementById("time")
const starting = document.getElementById("start")
const scoring = document.getElementById("emoji")
const outcome = document.getElementById("result")

starting.addEventListener("click", play)
scoring.addEventListener("click", add)
function play() {
    starting.disabled=true
    playing = true
    score = 0
    points.innerHTML = score
    timeLeft = 20
    times.innerHTML = timeLeft
    timer = setInterval(upTime, 1000) 
    repeat = setInterval(move, 500)
}

function upTime() {
    timeLeft = timeLeft - 1
    times.innerHTML = timeLeft
    if ( timeLeft === 0 ) {
        stopGame()
    } 
}

function stopGame() {
    starting.disabled=false
    clearInterval(timer);
    clearInterval(repeat);
    playing = false
    outcome.innerHTML = "You have " + score + " points!"
    
}

function add() {

    if ( playing === true ) {
        score ++
        points.innerHTML = score
    }

}

function move() {
    let x = Math.random()*444
    let y = Math.random()*240
    scoring.style.left = x + "px";
    scoring.style.top = y + "px";
}