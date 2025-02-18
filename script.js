const time = document.querySelector(".time");
const toggle = document.querySelector("button");

// setInterval(() => time.textContent = new Date().toLocaleTimeString("en-US",{hour12:false}),1000)

let is24HourFormat = false;
let intervalId = null;

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const updateTime = () => {
  let now = new Date();
  let hours = now.getHours();
  let mins = formatTime(now.getMinutes());
  let secs = formatTime(now.getSeconds());
  let ampm = "";

  if (!is24HourFormat) {
    ampm = hours >= 12 ? "AM" : "PM";
    hours = hours % 12 || 12;
  }

  hours = formatTime(hours);

  time.textContent = is24HourFormat
    ? `${hours}:${mins}:${secs}`
    : `${hours}:${mins}:${secs} ${ampm}`;
};

toggle.addEventListener("click", () => {
  is24HourFormat = !is24HourFormat;
  clearInterval(intervalId);
  intervalId = setInterval(updateTime, 1000);
  updateTime();
});

intervalId = setInterval(updateTime, 1000);
updateTime();
