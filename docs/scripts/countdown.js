//code from https://www.w3schools.com/howto/howto_js_countdown.asp

const countDownDate = new Date("Feb 11, 2022 20:46:25").getTime();

const x = setInterval(function () {

    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString()
    document.getElementById("hours").innerText = hours.toString()
    document.getElementById("minutes").innerText = minutes.toString()
    document.getElementById("seconds").innerText = seconds.toString()

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("headline").innerHTML = "DROP LIVE";
    }
}, 1000);