
        // Function to update the current time
        function updateTime() {
            // Get the current date and time
            const now = new Date();

            // Format the time as per your requirement
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');

            // Display the time in a specific element (replace 'timeDisplay' with the actual ID of the element)
            document.getElementById('timeDisplay').innerText = `${hours}:${minutes}:${seconds}`;

            // Update the time every second
            setTimeout(updateTime, 1000);
        }

        // Call the function when the document is fully loaded
        document.addEventListener('DOMContentLoaded', updateTime);


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
