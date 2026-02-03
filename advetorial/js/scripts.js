/**
 * Axen NeuroFuel - Static Scripts
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Axen NeuroFuel scripts initialized.");

  // 1. Countdown Timer Logic
  const initCountdown = () => {
    const timerContainer = document.querySelector(".font-mono.text-red-600");
    if (!timerContainer) return;

    const spans = timerContainer.querySelectorAll("span:not(.animate-pulse)");
    if (spans.length < 2) return;

    let minutes = parseInt(spans[0].innerText) || 14;
    let seconds = parseInt(spans[1].innerText) || 59;

    const updateDisplay = () => {
      spans[0].innerText = minutes.toString().padStart(2, "0");
      spans[1].innerText = seconds.toString().padStart(2, "0");
    };

    const timer = setInterval(() => {
      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        clearInterval(timer);
      }
      updateDisplay();
    }, 1000);
  };

  // 2. Smooth Scroll for "CHECK AVAILABILITY" buttons
  const initButtons = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => {
      if (btn.innerText.includes("CHECK AVAILABILITY")) {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.getElementById("cta");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    });
  };

  // Initialize all
  initCountdown();
  initButtons();
});
