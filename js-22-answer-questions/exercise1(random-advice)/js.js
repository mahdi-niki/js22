const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice-btn");

function getNewAdvice() {
  fetch(`https://api.adviceslip.com/advice?t=${new Date().getTime()}`)
    .then((response) => response.json())
    .then((data) => {
      const { id, advice } = data.slip;
      adviceId.textContent = id;
      adviceText.textContent = `"${advice}"`;
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
      adviceText.textContent = "Failed to load advice. Please try again.";
    });
}

getNewAdvice();

diceBtn.addEventListener("click", getNewAdvice);

diceBtn.addEventListener("mouseenter", () => {
  if (window.matchMedia("(hover: hover)").matches) {
    diceBtn.style.transform = `translateX(-50%) scale(1.1)`;
  }
});

diceBtn.addEventListener("mouseleave", () => {
  diceBtn.style.transform = `translateX(-50%) scale(1)`;
});
