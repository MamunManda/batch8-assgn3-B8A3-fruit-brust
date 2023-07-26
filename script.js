// time counter
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
      if (hours === 24) {
        hours = 0;
        days++;
      }
    }
  }

  const formattedTime = `${String(days).padStart(2, "0")} : ${String(
    hours
  ).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(
    seconds
  ).padStart(2, "0")}`;
  document.getElementById("timer").textContent = formattedTime;
}

setInterval(updateTime, 1000);

// modal section
function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
