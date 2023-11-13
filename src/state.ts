type GameOptions = "piedra" | "papel" | "tijera";

const state = {
  options: ["piedra", "papel", "tijera"] as GameOptions[],
  data: {
    moves: [],
    history: [{ result: "", playerWins: 0, computerWins: 0 }],
  },
  listeners: [],

  init() {
    const localData = localStorage.getItem("saved-state");
    if (localData) {
      this.setState(JSON.parse(localData));
    }
  },

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback(this.data);
    }
    localStorage.setItem("saved-state", JSON.stringify(newState));
    console.log("El estado cambió", this.data);
  },

  setMoves(jugador: GameOptions, computer: GameOptions) {
    const currentState = this.getState();
    const currentResult = this.whoWins(jugador, computer);

    currentState.moves.unshift({
      player: jugador,
      computer: computer,
    });

    currentState.history.unshift({
      result: currentResult,
      playerWins:
        currentResult === "win"
          ? currentState.history[0].playerWins + 1
          : currentState.history[0].playerWins,
      computerWins:
        currentResult === "lose"
          ? currentState.history[0].computerWins + 1
          : currentState.history[0].computerWins,
    });

    this.setState(currentState);
  },

  whoWins(jugador: GameOptions, computer: GameOptions): string {
    if (jugador === computer) {
      return "tie";
    } else if (
      (jugador === "piedra" && computer === "tijera") ||
      (jugador === "papel" && computer === "piedra") ||
      (jugador === "tijera" && computer === "papel")
    ) {
      return "win";
    } else {
      return "lose";
    }
  },

  subscribe(callback: (state: any) => any) {
    this.listeners.push(callback);
  },
};

export { state, GameOptions };
