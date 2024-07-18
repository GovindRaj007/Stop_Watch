let secondsElapsed=0
let interval = null
const time=document.getElementById("time")

function padStart(value){
    return String(value).padStart(2,"0") //2 is the length of the resulting string and the string "0" is padded to the given string value from left to right upto length 2 
}
function setTime(){
    const minutes=Math.floor(secondsElapsed/60)
    const seconds=secondsElapsed%60
    time.innerHTML=`${padStart(minutes)}:${padStart(seconds)}`
}
function timer(){
    secondsElapsed++
    setTime()
}

function startClock(){
    if(interval) stopClock()
    interval=setInterval(timer,1000) //timer function which is passed as argument is executed after every 1000miliseconds(1sec) delay
    console.log(interval,"interval") //setInterval function returns a numeric interval ID for the execution of callback function after each delay
}

function stopClock(){
 clearInterval(interval)
}
function resetClock(){
    stopClock()
    secondsElapsed=0;
    setTime()
}