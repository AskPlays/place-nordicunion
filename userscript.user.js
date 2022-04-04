// ==UserScript==
// @name         Nordic Union template
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  try to defend the nordic union!
// @author       AskPlays
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/AskPlays/place-nordicunion/raw/main/userscript.user.js
// @downloadURL  https://github.com/AskPlays/place-nordicunion/raw/main/userscript.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
  window.addEventListener('load', () => {
      document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
      (function () {
          const i = document.createElement("img");
          i.src = "https://raw.githubusercontent.com/AskPlays/place-nordicunion/main/dotted-place-template.png";
          i.onload = () => {
            i.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: ${i.width/3}px; height: ${i.height/3}px;`;
          }
          console.log(i);
          return i;
      })())

      // Add a style to put a hole in the pixel preview (to see the current or desired color)
      const waitForPreview = setInterval(() => {
        const preview = camera.querySelector("mona-lisa-pixel-preview");
        if (preview) {
          clearInterval(waitForPreview);
          const style = document.createElement('style')
          style.innerHTML = '.pixel { clip-path: polygon(-20% -20%, -20% 120%, 37% 120%, 37% 37%, 62% 37%, 62% 62%, 37% 62%, 37% 120%, 120% 120%, 120% -20%); }'
          preview.shadowRoot.appendChild(style);
        }
    }, 200);
  }, false);

}

