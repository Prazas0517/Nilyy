// Countdown Timer
const targetDate = new Date("2025-01-01T00:00:00");
const today = new Date();
const galleryStartDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 1,
  0,
  0,
  0
); // Tomorrow 12AM

const timerElements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  timerElements.days.textContent = days.toString().padStart(2, "0");
  timerElements.hours.textContent = hours.toString().padStart(2, "0");
  timerElements.minutes.textContent = minutes.toString().padStart(2, "0");
  timerElements.seconds.textContent = seconds.toString().padStart(2, "0");

