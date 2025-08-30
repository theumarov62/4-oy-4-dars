import { aiChoose } from "./ai-choose.js";
import { paper, rock, scissors } from "./constants.js";

export function checkWinner(ai, player) {
  if (ai === player) {
    return "Draw";
  } else if (ai === paper && player === rock) {
    return "AI win";
  } else if (ai === rock && player === scissors) {
    return "AI win";
  } else if (ai === scissors && player === paper) {
    return "AI win";
  } else {
    return "You Win";
  }
}
