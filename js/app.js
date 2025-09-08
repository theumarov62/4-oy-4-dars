import { aiChoose } from "./ai-choose.js";
import {
  elAi,
  elCloseModal,
  elCloseShopModal,
  elHands,
  elLevelUp,
  elOverlay,
  elPlayer,
  elPoint,
  elRefreshGame,
  elRules,
  elRulesModal,
  elScore,
  elShop,
  elShopModal,
  elStatus,
} from "./html-elements.js";
import { refreshGame } from "./refresh-game.js";
import { switchZone } from "./switch-zone.js";
import { mode, setMode } from "./mode.js";
import { checkWinner } from "./check-winner.js";

// --- LocalStorage dan oldingi qiymatlarni olish ---
let score = parseInt(localStorage.getItem("score")) || 0;
let point = parseInt(localStorage.getItem("point")) || 0;

// HTML elementlarni boshlang‘ich qiymatlar bilan yangilash
elScore.textContent = score;
elPoint.textContent = point;

// --- Foydalanuvchi qo‘li bilan o‘yin ---
elHands.forEach((hand) => {
  hand.addEventListener("click", (evt) => {
    const player = evt.target.alt;
    const playerSrc = evt.target.src;
    switchZone(true);
    elPlayer.src = playerSrc;

    setTimeout(() => {
      const ai = aiChoose(mode);
      elAi.src = `/images/${ai}.svg`;
      elAi.classList.add("w-[145px]", "h-[148px]");
      elPlayer.classList.add("w-[145px]", "h-[148px]");

      const winner = checkWinner(ai, player);
      elStatus.innerText = winner;

      // --- Score va point hisoblash ---
      if (winner === "Win") {
        score++;
        point += 10;
      } else if (winner === "Lose" && score > 0) {
        score--;
        point -= 5;
      }

      // HTML ga chiqarish
      elScore.textContent = score;
      elPoint.textContent = point;

      // --- LocalStorage ga saqlash ---
      localStorage.setItem("score", score);
      localStorage.setItem("point", point);
    }, 1000);
  });
});

elShop.addEventListener("click", () => {
  elShopModal.classList.remove("hidden");
});

elCloseShopModal.addEventListener("click", () => {
  elShopModal.classList.toggle("hidden");
});

elRules.addEventListener("click", () => {
  elRulesModal.classList.remove("hidden");
  elOverlay.style.filter = "blur(2px)";
});

elCloseModal.addEventListener("click", () => {
  elRulesModal.classList.add("hidden");
  elOverlay.style.filter = "none";
});

elLevelUp.addEventListener("click", () => {
  window.location.href = "./pages/hard.html";
});

if (document.body.classList.contains("index")) {
  setMode("easy");
} else if (document.body.classList.contains("hard")) {
  setMode("hard");
}

elRefreshGame.addEventListener("click", () => {
  refreshGame();

  elScore.textContent = score;
  elPoint.textContent = point;
});
