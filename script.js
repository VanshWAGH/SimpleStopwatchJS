var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

document.getElementById("start").addEventListener("click", function() {
    timer = true;
    this.style.backgroundColor = "#16a085";
    stopwatch();
});

document.getElementById("stop").addEventListener("click", function() {
    timer = false;
});

document.getElementById("reset").addEventListener("click", function() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    updateDisplay();
});

function updateDisplay() {
    document.getElementById("hr").innerHTML = hr < 10 ? "0" + hr : hr;
    document.getElementById("min").innerHTML = min < 10 ? "0" + min : min;
    document.getElementById("sec").innerHTML = sec < 10 ? "0" + sec : sec;
    document.getElementById("count").innerHTML = count < 10 ? "0" + count : count;
}

function stopwatch() {
    if (timer) {
        count++;
        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            min = 0;
            sec = 0;
        }
        updateDisplay();
        setTimeout(stopwatch, 10);
    }
}


