var timer;
var element=document.getElementById("timer");
function handlestart(){
    var sec=0;
    timer=setInterval(()=>{
        var minutes = Math.floor(sec / 60);
        var seconds = sec % 60;
        element.innerHTML = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        sec++;
    },1000);
}

function handlestop(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    element.innerHTML = "00:00";
}