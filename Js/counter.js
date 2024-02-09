
const [start, stop, reset] = document.querySelectorAll('button');
const [hrs, mins, sec] = document.querySelectorAll('input');
const [one, two, three] = document.querySelectorAll('span');

let interval;

let hours;
let minutes;
let seconds;
let b = true;

start.addEventListener('click', function () {
    if (b) {
        startFnc();
        b = false;
    } else return;
})

function startFnc() {
    hours = Number(hrs.value);
    minutes = Number(mins.value);
    seconds = Number(sec.value);


    interval = setInterval(() => {
        console.log(hours, minutes, seconds)
        if (minutes == 0 && hours == 0 && seconds == 0) {
            clear();
            hrs.value = "";
            mins.value = "";
            sec.value = "";
        }
        if (minutes == -1 && hours != 0) {
            minutes = 59;
            hours = --hours;
        }
        if (seconds == -1) {
            seconds = 59;
            minutes = --minutes;
            if (minutes == -1) {
                minutes = 59;
                hours = --hours;
            }
        }
        one.innerHTML = String(hours).padStart(2, '0')
        two.innerHTML = String(minutes).padStart(2, '0')
        three.innerHTML = String(seconds--).padStart(2, '0')
    }, 1000);
}
stop.addEventListener('click', function () {
    hrs.value = hours + "";
    mins.value = minutes + "";
    sec.value = seconds + "";
    b = true;
    clear();
})

reset.addEventListener('click', function () {
    clear();
    hrs.value = "";
    mins.value = "";
    sec.value = "";
    hours = 0;
    minutes = 0;
    seconds = 0;
    one.innerHTML = "00";
    two.innerHTML = "00";
    three.innerHTML = "00";
    b = true;
})

function clear() {
    clearInterval(interval);
}