console.log("hello");
let hour = 0;
let minute = 0;
let second = 0;

let count = 0;

let starting = false;

function start() {
    starting = true;
    stopwatch()
}
function stopwatch() {
    if (starting == true) {
        count = count + 1;
        if (count == 10) {
            second = second + 1;
            count = 0
        }
        if (second / 60 === 1) {
            second = 0;
            minute = minute + 1;
        }
        if (minute / 60 == 1) {
            minute = 0;
            second = 0;
            hour = hour + 1;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;

        if (second < 10) {
            secString = "0" + secString
        }
        if (minute < 10) {
            minString = "0" + minString
        }
        if (hour < 10) {
            hrString = "0" + hrString
        }


        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        // document.getElementById("count").innerHTML = count;
        setTimeout("stopwatch()", 10)
    }
}



function stop() {
    starting = false;

}
function reset() {
    starting = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0
    document.getElementById("hr").innerHTML = "0" + hour;
    document.getElementById("min").innerHTML = "0" + minute;
    document.getElementById("sec").innerHTML = "0" + second;
}

