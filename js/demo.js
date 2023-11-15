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
