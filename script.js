// Countdown Timer
const targetDate = new Date("2025-01-01T00:00:00");
const timerElements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};
const images = document.querySelectorAll(".photos img");

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

  // Handle unblurring images
  if (days <= 7) {
    const totalImages = images.length;
    const imagesToUnblur = totalImages - (7 - days); // Images to unblur based on days left
    images.forEach((img, index) => {
      if (index < imagesToUnblur) {
        img.classList.add("unblurred");
      } else {
        img.classList.remove("unblurred");
      }
    });
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

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
