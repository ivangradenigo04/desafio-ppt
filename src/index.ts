import { state } from "./state";
import { init as initRouter } from "./router";
import { init as initText } from "./components/text/index";
import { init as initButton } from "./components/button/index";
import { init as initHand } from "./components/hand/index";
import { init as initTimer } from "./components/timer/index";
import { init as initScore } from "./components/score/index";

(function main() {
  state.init();
  initText();
  initButton();
  initHand();
  initTimer();
  initScore();
  initRouter(document.querySelector(".root"));
})();
