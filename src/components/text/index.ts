export function init() {
  class Text extends HTMLElement {
    text: string | null;
    variant: string | null;

    constructor() {
      super();
    }

    connectedCallback() {
      this.text = this.textContent;
      this.variant = this.getAttribute("variant");
      this.render();
    }

    render() {
      const style = document.createElement("style");
      style.innerHTML = `
      .title,.subtitle{
        display:block;
        font-family:"Nunito";
        font-weight:700;
        line-height:1;
        white-space:pre-line;
        letter-spacing:2px;
      }
      
      .title{
        font-size:85px;
        color:#009048;
      }
      
      .subtitle{
        font-size:40px;
        text-align:center;
      }

      .component-55,component-45,.button-text{
        font-size:55px;
        font-weight:400;
        display:block
      }

      .component-45{
        font-size:45px;
      }

      .button-text{
        font-size:45px;
        color:#D8FCFC
      }
      `;

      this.className = this.variant || "";
      this.textContent = this.text;
      this.appendChild(style);
    }
  }
  customElements.define("text-el", Text);
}
