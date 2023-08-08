const reels = ['💎', '💲', '🌟'];
const spinButton = document.getElementById('spin-button');
const reelElements = document.querySelectorAll('.reel');

spinButton.addEventListener('click', spinReels);

function spinReels() {
  spinButton.disabled = true;
  for (let i = 0; i < reelElements.length; i++) {
    animateReel(reelElements[i]);
  }
}

function animateReel(reel) {
  let currentSymbol = reel.textContent;
  let spinCount = Math.floor(Math.random() * 20) + 10; // Number of spins

  let spinInterval = setInterval(() => {
    currentSymbol = getNextSymbol(currentSymbol);
    reel.textContent = currentSymbol;
    spinCount--;

    if (spinCount === 0) {
      clearInterval(spinInterval);
      spinButton.disabled = false;
    }
  }, 100); // Delay between spins
}

function getNextSymbol(currentSymbol) {
  const currentIndex = reels.indexOf(currentSymbol);
  const nextIndex = (currentIndex + 1) % reels.length;
  return reels[nextIndex];
}
