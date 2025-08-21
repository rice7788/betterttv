// ==UserScript==
// @name            BetterTTV
// @namespace       BTTV
// @description     Enhances Twitch with new features, emotes, and more.
// @copyright       NightDev, LLC
// @icon            https://cdn.jsdelivr.net/gh/rice7788/betterttv@main/bttv_logo.png
//
// @grant           none
//
// @match           https://*.twitch.tv/*
//
// @version         0.0.2
// ==/UserScript==

(function betterttv() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/gh/rice7788/betterttv@main/betterttv.js';
    var head = document.getElementsByTagName('head')[0];
    if (!head) return;
    head.appendChild(script);
})()
