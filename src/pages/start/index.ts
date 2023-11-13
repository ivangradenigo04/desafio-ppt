export function init() {
  const div = document.createElement("div");
  div.className = "page";

  div.innerHTML = `
    <div class="text-container">
    <text-el variant="title">Piedra
    Papel ó
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
    `;

  return div;
}
