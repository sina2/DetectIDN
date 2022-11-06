// ==UserScript==
// @name         Detect IDN(Internationalized Domain Name)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var magicWord = "://xn--";

    console.log(location.href);
    if( location.href.indexOf(magicWord) != -1){
        window.alert("Internationalized Domain Name!");
    } ;

})();
