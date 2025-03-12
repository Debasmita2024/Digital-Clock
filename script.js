let alarmTime = null;
let alarmTimeout = null;
const alarmSound = document.getElementById('alarmSound');

// Function to update the time
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  clockElement.textContent = `${hours}:${minutes}:${seconds}`;

  // Check if the alarm should ring
  if (alarmTime && `${hours}:${minutes}` === alarmTime) {
    ringAlarm();
  }
}

// Function to update the date
function updateDate() {
  const dateElement = document.getElementById('date');
  const now = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Function to set the alarm
function setAlarm() {
  const alarmInput = document.getElementById('alarmTime').value;

  if (!alarmInput) {
    alert('Please set a valid alarm time!');
    return;
  }

  alarmTime = alarmInput;
  document.getElementById('alarmMessage').textContent = `Alarm set for ${alarmTime}`;
}

// Function to ring the alarm
function ringAlarm() {
  alarmSound.play();
  document.getElementById('alarmMessage').textContent = "⏰ Alarm is ringing!";
}

// Function to stop the alarm
function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  document.getElementById('alarmMessage').textContent = "";
  alarmTime = null;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize both date and time
updateClock();
updateDate();
