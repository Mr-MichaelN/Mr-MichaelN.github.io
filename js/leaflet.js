'use strict';
document.addEventListener('DOMContentLoaded', function () {
    // ------------------------------------------------------ //
    // styled Leaflet  Map
    // ------------------------------------------------------ //
    // ------------------------------------------------------ //
// For demo purposes, can be deleted
// ------------------------------------------------------ //

// Asigning Alternative stylesheet & insert it in its place
var stylesheet = document.getElementById("theme-stylesheet");
var alternateStylesheet = document.createElement("link");
alternateStylesheet.setAttribute("id", "new-stylesheet");
alternateStylesheet.setAttribute("rel", "stylesheet");
stylesheet.parentNode.insertBefore(alternateStylesheet, stylesheet.nextSibling);

// Style Switcher
var styleSwitcher = document.getElementById("colour");
styleSwitcher.addEventListener("change", function () {
    var alternateColor = styleSwitcher.value;
    alternateStylesheet.setAttribute("href", alternateColor);
    Cookies.set("switcherColor", alternateColor, { expires: 365, path: "/" });
});

var theCookie = Cookies.get("switcherColor");
if (theCookie) {
    alternateStylesheet.setAttribute("href", theCookie);
}


document.addEventListener('DOMContentLoaded', function () {
    var introText = document.getElementById('intro-text');

    var styles = [
        { animation: 'fadeInOut 2s forwards', color: 'red' },      // Fade in/out
        { animation: 'circular 2s forwards', color: 'blue' },       // Circular animation
        { animation: 'dissolve 2s forwards', color: 'green' },       // Dissolve animation
        { animation: 'wipeDown 2s forwards', color: 'orange' },       // Wipe down
        { animation: 'wipeLeft 2s forwards', color: 'purple' },       // Wipe left
        { animation: 'wipeRight 2s forwards', color: 'yellow' },      // Wipe right
        { animation: 'wipeUp 2s forwards', color: 'pink' },         // Wipe up
        { animation: 'cutThroughBack 2s forwards', color: 'brown' }, // Cut through back
        { animation: 'cut 2s forwards', color: 'cyan' },            // Cut
        { animation: 'fadeThroughBack 2s forwards', color: 'magenta' },// Fade through back
        { animation: 'fadeSmoothly 2s forwards', color: 'teal' }     // Fade smoothly
        // Add more styles with different animation effects and colors
    ];

    var currentIndex = 0;

    function changeStyle() {
        Object.assign(introText.style, styles[currentIndex]);
        currentIndex = (currentIndex + 1) % styles.length;
    }

    changeStyle(); // Initially change the style

    setInterval(changeStyle, 8000); // Set an interval to change the style every 8 seconds
});


    function map() {
        var mapId = 'map',
            mapCenter = [53.14, 8.22],
            mapMarker = true;

        if (document.querySelector('#' + mapId)) {
            var icon = L.icon({
                iconUrl: 'img/marker.png',
                iconSize: [25, 37.5],
                popupAnchor: [0, -18],
                tooltipAnchor: [0, 19],
            });

            var dragging = false,
                tap = false;

            if (window.outerWidth > 700) {
                dragging = true;
                tap = true;
            }

            var map = L.map(mapId, {
                center: mapCenter,
                zoom: 13,
                dragging: dragging,
                tap: tap,
                scrollWheelZoom: false,
            });

            var Stamen_TonerLite = L.tileLayer(
                'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}',
                {
                    attribution:
                        'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    subdomains: 'abcd',
                    minZoom: 0,
                    maxZoom: 20,
                    ext: 'png',
                }
            );

            Stamen_TonerLite.addTo(map);

            map.addEventListener(
                'focus',
                function () {
                    map.scrollWheelZoom.enable();
                },
                { once: true }
            );

            if (mapMarker) {
                var marker = L.marker(mapCenter, {
                    icon: icon,
                }).addTo(map);

                marker.bindPopup(
                    "<div class='p-4'><h5>Info Window Content</h5><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p></div>",
                    {
                        minwidth: 200,
                        maxWidth: 600,
                        className: 'map-custom-popup',
                    }
                );
            }
        }
    }

    map();
});
