function countdown() {
    const marvelDate = new Date ("May 05, 2023 00:00");
    const now = new Date();
    const diff = marvelDate - now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/ msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/ msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/ msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <=0) {
        document.querySelector ('.days').textContent = 0;
        document.querySelector ('.hours').textContent = 0;
        document.querySelector ('.minutes').textContent = 0;
        document.querySelector ('.seconds').textContent = 0;

        clearInterval (timerID);
        release ();
    }

}

let timerID = setInterval(countdown, 1000);

function release () {
    const heading = document.querySelector("h1");
    heading.textContent = "YIPEE!!! It's cinema time!!!";
    heading.classList.add ("watch");
}

const button = document.querySelector("#myButton");
button.addEventListener ("click", () => {
    document.querySelector("#myAudio").play();
})


const back = document.querySelector ("#back");
const next = document.querySelector ("#next");

const photos = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

let i = 0;

next.addEventListener("click", () => {
    i++;
    if (i>photos.length -1) {
        i=0;
    }

    document.querySelector ("#pictures").src = photos [i];
})


back.addEventListener ("click", () => {
    i--;
    if (i<0) {
        i=photos.length -1;
    }
    document.querySelector ("#pictures").src = photos [i];
})


