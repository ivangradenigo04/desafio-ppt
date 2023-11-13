export function init() {
  class Button extends HTMLElement {
    shadow: ShadowRoot;
    text: string | null;
    route: string | null;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      this.text = this.textContent;
      this.route = this.getAttribute("href");
      this.render();
    }

    render() {
      const style = document.createElement("style");
      style.innerHTML = `
      .root{
        width:320px
      }
      
      .button{
        font-family:"Odibee Sans";
        border-radius: 10px;
        border: 10px solid #001997;
        background-color: #006CFC;
        width:100%;
        padding:8px;
        cursor:pointer;
        transition: transform 0.3s;
      }
      
      @media (min-width: 768px) {
        .root {
          width:340px;
        }
        .button:hover{
          transform: scale(1.1);
        }
      }
      `;

      this.shadow.innerHTML = `
        <div class="root">
        <button class="button" href=${this.route}><text-el variant="button-text">${this.text}</text-el></button> 
        </div>    
      `;

      this.shadow.appendChild(style);
    }
  }
  customElements.define("button-el", Button);
}
