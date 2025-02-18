const time = document.querySelector(".time");

// setInterval(() => time.textContent = new Date().toLocaleTimeString("en-US",{hour12:false}),1000)

const formatTime = (time) => {

    return time < 10 ? `0${time}` : time
    
}

setInterval(() => {
  let now = new Date();
  let hours = formatTime(now.getHours() % 12 || 12);
  let mins = formatTime(now.getMinutes());
  let secs = formatTime(now.getSeconds());
  let ampm = hours >= 12 ? "AM" : "PM";
  time.textContent = `${hours}:${mins}:${secs} ${ampm}`;
}, 1000);
