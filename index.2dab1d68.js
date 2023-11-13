var e=globalThis,t={},i={},a=e.parcelRequire0eff;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequire0eff=a);var n=a.register;n("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>i,set:e=>i=e,enumerable:!0,configurable:!0});var i,a=new Map;i=function(e,t){for(var i=0;i<t.length-1;i+=2)a.set(t[i],{baseUrl:e,path:t[i+1]})}}),n("3R7Ha",function(e,t){e.exports=new URL("win.06a0e2ed.png",import.meta.url).toString()}),n("jkQIv",function(e,t){e.exports=new URL("lose.253126a8.png",import.meta.url).toString()}),n("1tvEs",function(e,t){e.exports=new URL("piedra.f7ab90c7.png",import.meta.url).toString()}),n("cNxBb",function(e,t){e.exports=new URL("papel.97b4e337.png",import.meta.url).toString()}),n("j8mWv",function(e,t){e.exports=new URL("tijera.af887105.png",import.meta.url).toString()}),n("72Tko",function(e,t){e.exports=new URL("piedraL.235b1aee.png",import.meta.url).toString()}),n("6Czoi",function(e,t){e.exports=new URL("papelL.7657fda8.png",import.meta.url).toString()}),n("05zOQ",function(e,t){e.exports=new URL("tijeraL.fa900d32.png",import.meta.url).toString()}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.2dab1d68.js","icvvp","win.06a0e2ed.png","7JH3G","lose.253126a8.png","9FfCk","piedra.f7ab90c7.png","1Bffm","papel.97b4e337.png","hJPD1","tijera.af887105.png","5LO1Y","piedraL.235b1aee.png","ja5lT","papelL.7657fda8.png","7QZLp","tijeraL.fa900d32.png"]'));const s={options:["piedra","papel","tijera"],data:{moves:[],history:[{result:"",playerWins:0,computerWins:0}]},listeners:[],init(){let e=localStorage.getItem("saved-state");e&&this.setState(JSON.parse(e))},getState(){return this.data},setState(e){for(let t of(this.data=e,this.listeners))t(this.data);localStorage.setItem("saved-state",JSON.stringify(e)),console.log("El estado cambi\xf3",this.data)},setMoves(e,t){let i=this.getState(),a=this.whoWins(e,t);i.moves.unshift({player:e,computer:t}),i.history.unshift({result:a,playerWins:"win"===a?i.history[0].playerWins+1:i.history[0].playerWins,computerWins:"lose"===a?i.history[0].computerWins+1:i.history[0].computerWins}),this.setState(i)},whoWins:(e,t)=>e===t?"tie":"piedra"===e&&"tijera"===t||"papel"===e&&"piedra"===t||"tijera"===e&&"papel"===t?"win":"lose",subscribe(e){this.listeners.push(e)}},r="/desafio-ppt";function o(){return location.host.includes("github.io")}const l=[{path:/\/start/,handler:function(){let e=document.createElement("div");return e.className="page",e.innerHTML=`
    <div class="text-container">
    <text-el variant="title">Piedra
    Papel \xf3
    Tijera
    </text-el>
    </div>
    <div class="button-container">
    <button-el href="/rules">Empezar</button-el>
    </div>
    <div class="hands-container">
    <hand-el variant="piedra"></hand-el>
    <hand-el variant="papel"></hand-el>
    <hand-el variant="tijera"></hand-el>
    </div>
    `,e}},{path:/\/rules/,handler:function(){let e=document.createElement("div");return e.className="page",e.innerHTML=`
    <div class="text-container">
    <text-el variant="subtitle">Presion\xe1 jugar
    y eleg\xed: piedra,
    papel o tijera
    antes de que 
    pasen los 3 
    segundos.
    </text-el>
    </div>
    <div class="button-container">
    <button-el href="/game">\xa1Jugar!</button-el>
    </div>
    <div class="hands-container">
    <hand-el variant="piedra"></hand-el>
    <hand-el variant="papel"></hand-el>
    <hand-el variant="tijera"></hand-el>
    </div>
    `,e}},{customPage:void customElements.define("game-page",class extends HTMLElement{constructor(){super(),this.clicked=!1,this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}connectedListeners(){let e=this.shadow.querySelectorAll("hand-el");for(let t of e){let i=t.shadowRoot;t?.addEventListener("click",a=>{a.preventDefault(),this.clicked=!0;let n=i.querySelector("img");n.classList.remove("button"),n.classList.add("selected");let r=Math.floor(2*Math.random());for(let i of(s.setMoves(t.getAttribute("variant"),s.options[r]),e))if(i!==t){let e=i.shadowRoot,t=e.querySelector("img");t.classList.remove("button"),t.classList.add("discarded")}})}}startTimer(e,t){let i=this.shadow.querySelector("timer-el"),a=i.shadowRoot.querySelector(".timer"),n=setInterval(()=>{--e,a.textContent=e.toString(),e<0&&(clearInterval(n),this.clicked?(t(),setTimeout(()=>{d(document.querySelector(".root"),"/result")},1500)):d(document.querySelector(".root"),"/rules"))},1e3)}render(){let e=document.createElement("style");e.innerHTML=`
        .root{
          display:flex;
          flex-direction:column;
        }

        .hands-container {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%);
          display: flex;
          align-items:flex-end;
          gap:10px;
        }
        
        @media (min-width: 768px) {
          .hands-container {
            gap: 50px;
          }
        }
        `,this.shadow.innerHTML=`
        <div class="root">
        <div class="timer-container">
        <timer-el class="timer">3</timer-el> 
        </div> 
        <div class="hands-container">
        <hand-el variant="piedra" type="button" size="large"></hand-el>
        <hand-el variant="papel" type="button" size="large"></hand-el>
        <hand-el variant="tijera" type="button" size="large"></hand-el>
        </div>
        </div>    
        `,this.shadow.appendChild(e),this.connectedListeners(),this.startTimer(3,()=>{this.playerMove=s.getState().moves[0].player,this.computerMove=s.getState().moves[0].computer,this.shadow.innerHTML=`
          <hand-el class="computer-move" variant=${this.computerMove} size="large"></hand-el>
          <hand-el class="my-move" variant=${this.playerMove} size="large"></hand-el>
          `})}}),path:/\/game/,handler:()=>document.createElement("game-page")},{customPage:void customElements.define("result-el",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.variant=s.getState().history[0].result,this.winURL=a("3R7Ha"),this.loseURL=a("jkQIv"),this.render()}render(){let e=document.createElement("style");e.innerHTML=`
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
        `,"win"==this.variant?this.shadow.innerHTML=`
          <div class="root">
          <img src=${this.winURL}>
          <div class="score-container">
          <score-el class="score"></score-el> 
          </div>
          <div class="button-container">
          <button-el href="/rules">Volver a jugar</button-el>
          </div>
          </div>    
          `:(this.variant,this.shadow.innerHTML=`
          <div class="root lose">
          <img class="img" src=${this.loseURL}>
          <div class="score-container">
          <score-el class="score"></score-el> 
          </div>
          <div class="button-container">
          <button-el href="/rules">Volver a jugar</button-el>
          </div>
          </div>    
          `),this.shadow.appendChild(e)}}),path:/\/result/,handler:()=>document.createElement("result-el")}];function d(e,t){function i(t){console.log("El handleRoute recibi\xf3 una nueva ruta",t);let i=o()?t.replace(r,""):t;for(let t of l)if(t.path.test(i)){if("/result"!==i)for(;e?.firstChild;)e.removeChild(e.firstChild);let n=t.handler();e?.appendChild(n),function(){let e=e=>{let t=e.target.getAttribute("href");a(t)},t=document?.querySelector("button-el");t?.addEventListener("click",e);let i=document?.querySelector("result-el"),n=i?.shadowRoot?.querySelector("button-el");n?.addEventListener("click",e)}()}}function a(e){let t=o()?r+e:e;history.pushState({},"",t),i(t)}t?a(t):"/desafio-ppt/"==location.pathname?a("/start"):"/"==location.pathname?a("/start"):i(location.pathname),window.onpopstate=function(){"/rules"==location.pathname&&location.reload(),"/result"==location.pathname&&location.reload(),i(location.pathname)}}s.init(),function(){class e extends HTMLElement{constructor(){super()}connectedCallback(){this.text=this.textContent,this.variant=this.getAttribute("variant"),this.render()}render(){let e=document.createElement("style");e.innerHTML=`
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
      `,this.className=this.variant||"",this.textContent=this.text,this.appendChild(e)}}customElements.define("text-el",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.text=this.textContent,this.route=this.getAttribute("href"),this.render()}render(){let e=document.createElement("style");e.innerHTML=`
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
      `,this.shadow.innerHTML=`
        <div class="root">
        <button class="button" href=${this.route}><text-el variant="button-text">${this.text}</text-el></button> 
        </div>    
      `,this.shadow.appendChild(e)}}customElements.define("button-el",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.variant=this.getAttribute("variant"),this.size=this.getAttribute("size"),this.piedraURL=a("1tvEs"),this.papelURL=a("cNxBb"),this.tijeraURL=a("j8mWv"),this.piedraLargeURL=a("72Tko"),this.papelLargeURL=a("6Czoi"),this.tijeraLargeURL=a("05zOQ"),this.type=this.getAttribute("type"),this.render()}render(){let e=document.createElement("style");e.innerHTML=`
      img{
        display: block;
        height:125px;
      }
      
      @media (min-height: 768px) {
        img {
          height:150px;
        }
      }

      .button{
        cursor:pointer;
        transition: transform 0.2s;
        height:180px;
      }

      @media (min-width: 768px) {
        .button {
          height:200px;
        }
      }

      .button:hover{
        transform: scale(1.2);
      }

      .selected{
        height:190px;
      }
      
      @media (min-width: 768px) {
        .selected {
          height:230px;
        }
      }

      .discarded{
        height:150px;
        opacity:0.5;
        width:120px;
      }

      .my-move,.computer-move{
        height:230px;
        bottom:0;
        position:absolute;
        left: 50%;
        transform: translate(-50%);
      }

      .computer-move{
        top:0;
        left: 50%;
        transform: translate(-50%) rotate(180deg);
      }
      `,"piedra"==this.variant&&"large"==this.size?this.shadow.innerHTML=` 
        <div class="root">
        <img class="${this.type} ${this.className}" src=${this.piedraLargeURL}>
        </div> 
        `:"papel"==this.variant&&"large"==this.size?this.shadow.innerHTML=` 
        <div class="root">
        <img class="${this.type} ${this.className}" src=${this.papelLargeURL}>
        </div> 
        `:"tijera"==this.variant&&"large"==this.size?this.shadow.innerHTML=` 
        <div class="root">
        <img class="${this.type} ${this.className}" src=${this.tijeraLargeURL}>
        </div> 
        `:"piedra"==this.variant?this.shadow.innerHTML=` 
        <div class="root">
        <img class="${this.type} ${this.className}" src=${this.piedraURL}>
        </div> 
        `:"papel"==this.variant?this.shadow.innerHTML=` 
        <div class="root">
        <img class="${this.type} ${this.className}" src=${this.papelURL}>
        </div> 
        `:"tijera"==this.variant&&(this.shadow.innerHTML=` 
        <div class="root">
        <img class="${this.type} ${this.className}" src=${this.tijeraURL}>
        </div> 
        `),this.shadow.appendChild(e)}}customElements.define("hand-el",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.count=3,this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.text=this.textContent,this.render()}render(){let e=document.createElement("style");e.innerHTML=`
      .timer{
        font-family:"Nunito";
        display:flex;
        align-items:center;
        justify-content:center;
        font-size: 70px;
        width: 200px;
        height: 100px;
        margin:50px auto;
        padding:50px 0;
        border: 10px solid black;
        border-radius:50%;
      }
      `,this.shadow.innerHTML=`
        <div class="root">
        <div class="timer">${this.count}</div> 
        </div>    
      `,this.shadow.appendChild(e)}}customElements.define("timer-el",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){s.subscribe(()=>this.render()),this.playerScore=s.getState().history[0].playerWins,this.computerScore=s.getState().history[0].computerWins,this.render()}render(){let e=document.createElement("style");e.innerHTML=`
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
      `,this.shadow.innerHTML=`
        <div class="root">
        <text-el variant="component-55">Score</text-el> 
        <div class="score-content">
        <text-el variant="component-45">Vos:${this.playerScore}</text-el> 
        <text-el variant="component-45">M\xe1quina:${this.computerScore}</text-el> 
        </div>    
        </div>    
      `,this.shadow.appendChild(e)}}customElements.define("score-el",e)}(),d(document.querySelector(".root"));//# sourceMappingURL=index.2dab1d68.js.map

//# sourceMappingURL=index.2dab1d68.js.map
