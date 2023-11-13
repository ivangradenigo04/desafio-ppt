import { state } from "../../state";

export function init() {
  customElements.define(
    "result-el",
    class extends HTMLElement {
      shadow: ShadowRoot;
      variant: string | null;
      winURL: string;
      loseURL: string;

      constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
      }

      connectedCallback() {
        this.variant = state.getState().history[0].result;
        this.winURL = require("url:../../assets/win.png");
        this.loseURL = require("url:../../assets/lose.png");
        this.render();
      }

      render() {
        const style = document.createElement("style");
        style.innerHTML = `
        .root{
          display:none;
          position:absolute;
          top:0;
          bottom:0;
          right:0;
          left:0;
          display:flex;
          flex-direction:column;
          align-items:center;
          padding:30px 0;
          background-color:rgba(136, 137, 73, 0.9);
        }
        
        @media (min-height: 768px) {
          .root {
            padding:70px 0;
          }
        }

        .lose{
          background-color:rgba(137, 73, 73, 0.90);
        }

        .active{
          display:
        }

        img{
          width:200px;
          height:215px;
        }
        
        @media (min-height: 768px) {
          img {
            width: 255px;
            height: 260px;
          }
        }

        .score-container {
          margin:10px auto 40px; 
        }
        
        @media (min-height: 768px) {
          .score-container {
            margin:30px auto 80px; 
          }
        }

        .button-container{
          margin:0 auto;
        }
        `;

        if (this.variant == "win") {
          this.shadow.innerHTML = `
          <div class="root">
          <img src=${this.winURL}>
          <div class="score-container">
          <score-el class="score"></score-el> 
          </div>
          <div class="button-container">
          <button-el href="/rules">Volver a jugar</button-el>
          </div>
          </div>    
          `;
        } else if (this.variant == "lose" || "tie") {
          this.shadow.innerHTML = `
          <div class="root lose">
          <img class="img" src=${this.loseURL}>
          <div class="score-container">
          <score-el class="score"></score-el> 
          </div>
          <div class="button-container">
          <button-el href="/rules">Volver a jugar</button-el>
          </div>
          </div>    
          `;
        }

        this.shadow.appendChild(style);
      }
    }
  );
}
