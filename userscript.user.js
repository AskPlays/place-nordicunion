// ==UserScript==
// @name         Nordic Union template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to defend the nordic union!
// @author       AskPlays
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
  window.addEventListener('load', () => {
          document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
      (function () {
          const i = document.createElement("img");
          i.src = "https://raw.githubusercontent.com/AskPlays/place-nordicunion/505151e1532c8c4ce895cce635d1f00da4446f91/dotted-place-template.png";
          i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
          console.log(i);
          return i;
      })())

  }, false);

}

