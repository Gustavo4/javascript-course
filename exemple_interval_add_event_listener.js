let interval;
let secondes = 9;
let btn = document.querySelector("button");
btn.addEventListener("click", start);

function start() {
    interval = setInterval(decompte, 1000);
}

function decompte() {
    secondes--;
    if (secondes == 0) {
        stop(interval);
    } 
    document.body.innerHTML += secondes + '<br>';
}

function stop(interval) {
    clearInterval(interval);
    document.body.innerHTML += 'Stop !<br>';
}