var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

// Event listeners for buttons
document.getElementById("start").addEventListener("click", function() {
    timer = true;
    this.style.backgroundColor = "#16a085"; // Change color when started
    stopwatch();
});

document.getElementById("stop").addEventListener("click", function() {
    timer = false;
});

document.getElementById("reset").addEventListener("click", reset);

// Reset function
function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    updateDisplay();
}

// Update display function
function updateDisplay() {
    var hrString = hr < 10 ? "0" + hr : hr;
    var minString = min < 10 ? "0" + min : min;
    var secString = sec < 10 ? "0" + sec : sec;
    var countString = count < 10 ? "0" + count : count;

    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
}

// Stopwatch function
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
