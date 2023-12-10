// ==UserScript==
// @name         Add App Parameter to YouTube (HTTPS only)
// @namespace    http://your-website.com
// @version      1.0
// @description  Add the 'app=desktop' parameter to YouTube HTTPS URLs
// @match        https://(www\.)?(m\.)?youtube\.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @run-at       auto
// ==/UserScript==

(function() {
    'use strict';

    // Define the parameter and value
    var parameterName = 'app';
    var parameterValue = 'desktop';

    // Get the current URL
    var currentUrl = window.location.href;

    // Check if the parameter already exists
    if (currentUrl.indexOf(parameterName + '=') === -1) {
        // Add the parameter to the URL
        var newUrl = currentUrl + (currentUrl.includes('?') ? '&' : '?') + parameterName + '=' + parameterValue;

        // Redirect to the modified URL
        window.location.href = newUrl;
    }
})();