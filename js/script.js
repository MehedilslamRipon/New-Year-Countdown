// new year countdown func
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countDown = document.getElementById("countdown");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountDown() {
  const currentTime = new Date();
  diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);

  const h = Math.floor(diff / 1000 / 60 / 60) % 24;

  const m = Math.floor(diff / 1000 / 60) % 60;

  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;

  minutes.innerHTML = m < 10 ? "0" + m : m;

  seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateCountDown, 1000);

// emoji func
document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
  const eye = document.querySelectorAll(".eye");
  eye.forEach((eye) => {
    const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
    const radian = Math.atan2(event.pageX - x, event.pageY - y);
    const rot = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = "rotate(" + rot + "deg)";
  });
}
