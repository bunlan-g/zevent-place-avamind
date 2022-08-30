// ==UserScript==

// @name         Zevent Place - Avamind
// @namespace    https://github.com/bunlan-g/zevent-place-avamind
// @version      0.1.1
// @description  Mettons de l'amour dans la vie (et sur ZPlace aussi) !
// @author       Baron Ululating
// @match        https://place.zevent.fr/*
// @icon         https://place.zevent.fr/assets/favicon.608d598f.ico
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/bunlan-g/zevent-place-avamind/master/zevent-place.user.js
// @updateURL    https://raw.githubusercontent.com/bunlan-g/zevent-place-avamind/master/zevent-place.user.js
// @supportURL   https://github.com/bunlan-g/zevent-place-avamind/issues

// ==/UserScript==

// Basé sur le script du r/place utilisé par r/france

window.addEventListener("load", () => {
    const overlay = document.createElement("img");
    const xOffset = 10;
    const yOffset = 15;
    overlay.src = `https://raw.githubusercontent.com/bunlan-g/zevent-place-avamind/master/avamindLove.png`;
    overlay.style = `position: absolute; left: ${xOffset}px; top: ${yOffset}px; image-rendering: pixelated; width: 29px; height: 32px; opacity: 1; background-color:#00000000;`;

    document.getElementsByClassName("game-container__inner")[0]
        .appendChild(overlay);
}, false);