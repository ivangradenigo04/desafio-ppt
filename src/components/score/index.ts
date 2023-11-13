import { state } from "../../state";

export function init() {
  class Score extends HTMLElement {
    shadow: ShadowRoot;
    playerScore: number;
    computerScore: number;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      state.subscribe(() => this.render());
      this.playerScore = state.getState().history[0].playerWins;
      this.computerScore = state.getState().history[0].computerWins;
      this.render();
    }

    render() {
      const style = document.createElement("style");
      style.innerHTML = `
      .root{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:12px;
        font-family:"Odibee Sans";
        background-color: #FFF;
        padding:10px 30px;
        border: 10px solid #000;
        border-radius: 10px;
        width:200px;
      }

      .score-content{
        display:flex;
        flex-direction:column;
        align-self:flex-end;
        align-items:flex-end;
      }
      `;

      this.shadow.innerHTML = `
        <div class="root">
        <text-el variant="component-55">Score</text-el> 
        <div class="score-content">
        <text-el variant="component-45">Vos:${this.playerScore}</text-el> 
        <text-el variant="component-45">Máquina:${this.computerScore}</text-el> 
        </div>    
        </div>    
      `;

      this.shadow.appendChild(style);
    }
  }
  customElements.define("score-el", Score);
}
