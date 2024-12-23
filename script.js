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

const images = document.querySelectorAll(".photos img");
const notes = document.querySelectorAll(".love-note"); // Select all note sections
const videoSection = document.getElementById("video-section");

// Initially hide all images, notes, and the video
images.forEach((img) => (img.style.display = "none"));
notes.forEach((note) => (note.style.display = "none"));
videoSection.style.display = "none";

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

  // Reveal the images one by one daily
  const imageRevealDate = new Date(galleryStartDate);
  images.forEach((img, index) => {
    const revealTime = new Date(imageRevealDate);
    revealTime.setDate(galleryStartDate.getDate() + index); // Add one day for each image

    if (now >= revealTime) {
      img.style.display = "block";
    }
  });

  const noteRevealDate = new Date(galleryStartDate);
  notes.forEach((note, index) => {
    const revealTime = new Date(noteRevealDate);
    revealTime.setDate(noteRevealDate.getDate() + index); // Add one day for each note

    if (now >= revealTime) {
      note.style.display = "block";
    }
  });

  // Reveal the video on the target date
  if (now >= targetDate) {
    videoSection.style.display = "block";
  }
}

// Modal for Enlarged Images
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close");

document.querySelectorAll(".photos img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Update the countdown and handle visibility
setInterval(updateCountdown, 1000);
updateCountdown();
