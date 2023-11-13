import { init as initStart } from "./pages/start/index";
import { init as initRules } from "./pages/rules/index";
import { init as initGame } from "./pages/game/index";
import { init as initResult } from "./pages/result/index";

const BASE_PATH = "/desafio-ppt";

function isGithubPages() {
  return location.host.includes("github.io");
}

const routes = [
  {
    path: /\/start/,
    handler: initStart,
  },
  {
    path: /\/rules/,
    handler: initRules,
  },
  {
    customPage: initGame(),
    path: /\/game/,
    handler: () => document.createElement("game-page"),
  },
  {
    customPage: initResult(),
    path: /\/result/,
    handler: () => document.createElement("result-el"),
  },
];

export function init(container: HTMLElement | null, newPath?: string) {
  function handleRoute(route) {
    console.log("El handleRoute recibió una nueva ruta", route);
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        if (newRoute !== "/desafio-ppt/result") {
          while (container?.firstChild) {
            container.removeChild(container.firstChild);
          }
        }
        const page = r.handler();
        container?.appendChild(page);
        findAndProcessLinks();
      }
    }
  }

  function goTo(path: string) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function findAndProcessLinks() {
    const handleClickEvent = (e: Event) => {
      const route: string = (e.target as any).getAttribute("href");
      goTo(route);
    };

    const buttonEl = document?.querySelector("button-el");
    buttonEl?.addEventListener("click", handleClickEvent);

    const resultEl = document?.querySelector("result-el");
    const hiddenButtonEl = resultEl?.shadowRoot?.querySelector("button-el");
    hiddenButtonEl?.addEventListener("click", handleClickEvent);
  }

  if (newPath) {
    goTo(newPath);
  } else if (location.pathname == "/desafio-ppt/") {
    goTo("/start");
  } else if (location.pathname == "/") {
    goTo("/start");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    if (location.pathname == "/rules") {
      location.reload();
    }
    if (location.pathname == "/result") {
      location.reload();
    }
    handleRoute(location.pathname);
  };
}
