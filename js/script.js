// new year countdown func
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countDown = document.getElementById("countdown");
const fireWorkBtn = document.getElementById("fireWorkBtn");
const headingOne = document.getElementById("headingOne");
const headingTwo = document.getElementById("headingTwo");
const cap = document.getElementById("cap");
const cap2 = document.getElementById("cap2");
const fireWorkBtn2 = document.getElementById("fireWorkBtn2");
const face2 = document.getElementById("face2");

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

function fireWork() {
   $(".fireWork").fireworks({
      sound: true, // sound effect
      opacity: 0.4,
      width: "100%",
      height: "100%",
   });
   headingOne.innerHTML = "🎈🎉 Happy New Year ! 🥳";
   headingTwo.innerHTML =
      "Let us remember the good times along with the bad And pray for sunnier days in 2021 ...";
   cap.style.display = "block";
   cap2.style.display = "block";
}

fireWorkBtn.addEventListener("click", () => {
   fireWork();
});

fireWorkBtn2.addEventListener("click", () => {
   fireWork();
   headingOne.style.marginBottom = "150px";
   headingTwo.style.marginTop = "150px";
   face2.style.marginTop = "140px";
});
