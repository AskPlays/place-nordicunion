// ==UserScript==
// @name         Nordic Union template
// @namespace    http://tampermonkey.net/
// @version      0.8
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
    const camera = document.querySelector("mona-lisa-embed").shadowRoot.querySelector("mona-lisa-camera");
    const layout = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].children[0];
    const canvas = camera.querySelector("mona-lisa-canvas");
    let img = document.createElement("img");
    const url = "https://raw.githubusercontent.com/AskPlays/place-nordicunion/main/dotted-place-template.png";
    function addImg() {
        canvas.shadowRoot.querySelector('.container').appendChild(
            (function () {
                img.src = url+"?"+(new Date().getTime());
                img.onload = () => {
                    img.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: ${img.width/3}px; height: ${img.height/3}px;`;
                }
                console.log(img);
                return img;
            }
        )());
    }
    addImg();

    layout.appendChild(
    (function () {
        const btn = document.createElement("button");
        btn.style = "position: absolute;left: 20px;top: 60px; background #fff; border-radius: 5px; font-size: 16px; cursor: pointer !important; padding: 4px;";
        btn.innerText = "Refresh Template";
        btn.onclick = () => {
            img.remove();
            img = document.createElement("img");
            addImg();
        }
        return btn;
    })());

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

