export function init() {
  const div = document.createElement("div");
  div.className = "page";

  div.innerHTML = `
    <div class="text-container">
    <text-el variant="subtitle">Presioná jugar
    y elegí: piedra,
    papel o tijera
    antes de que 
    pasen los 3 
    segundos.
    </text-el>
    </div>
    <div class="button-container">
    <button-el href="/game">¡Jugar!</button-el>
    </div>
    <div class="hands-container">
    <hand-el variant="piedra"></hand-el>
    <hand-el variant="papel"></hand-el>
    <hand-el variant="tijera"></hand-el>
    </div>
    `;

  return div;
}
