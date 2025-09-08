const elGameZone = document.getElementById("gameZone") || null;
const elProcessZone = document.getElementById("processZone") || null;
const elHands = document.querySelectorAll(".hand");
const elPlayer = document.getElementById("player") || null;
const elAi = document.getElementById("ai") || null;
const elRefreshGame = document.getElementById("refreshGame") || null;
const elStatus = document.getElementById("status") || null;
const elScore = document.getElementById("counter") || null;
const elRules = document.getElementById("rulesModal") || null;
const elRulesModal = document.getElementById("rules") || null;
const elCloseModal = document.getElementById("closeRules") || null;
const elOverlay = document.getElementById("overlay") || null;
const elLevelUp = document.getElementById("levelUp") || null;
const elPoint = document.getElementById("point");
const elShop = document.getElementById("shop");
const elShopModal = document.getElementById("shopModal");
const elCloseShopModal = document.getElementById("closeShopModal");

export {
  elGameZone,
  elProcessZone,
  elHands,
  elPlayer,
  elAi,
  elRefreshGame,
  elStatus,
  elScore,
  elRules,
  elRulesModal,
  elCloseModal,
  elOverlay,
  elLevelUp,
  elPoint,
  elShop,
  elShopModal,
  elCloseShopModal,
};
