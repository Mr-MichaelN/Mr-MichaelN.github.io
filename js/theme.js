'use strict';
document.addEventListener('DOMContentLoaded', function () {
    /* =====================================================
        TESTIMONIALS SLIDER
    ===================================================== */
    var testimonialsSlider = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            720: {
                slidesPerView: 2,
            },
            970: {
                slidesPerView: 3,
            },
            1170: {
                slidesPerView: 4,
            },
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
    });

    /* =====================================================
        WORKS SLIDER
    ===================================================== */
    var worksSlider = new Swiper('.work-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
    });

    /* =====================================================
        INITALIZE TOOLTIPS
    ===================================================== */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    /* =====================================================
        PARALLAX
    ===================================================== */
    new universalParallax().init();

    /* =====================================================
        STATISTICS COUNTER
    ===================================================== */
    function countup() {
        var options = {
            useEasing: true,
            useGrouping: true,
            duration: 4,
        };

        var counter1 = new CountUp('counter1', 0, 120, 0, options);
        var counter2 = new CountUp('counter2', 0, 50, 0, options);
        var counter3 = new CountUp('counter3', 0, 320, 0, options);
        var counter4 = new CountUp('counter4', 0, 333, 0, options);

        if (!counter1.error) {
            counter1.start();
            counter2.start();
            counter3.start();
            counter4.start();
        } else {
            console.error('error');
        }
    }

     /* =====================================================
       SCROLLING LINKS W/ OFFSET
    ===================================================== */

    document.querySelectorAll('.nav-item a[href^="#"]')
        .forEach(trigger => {
            trigger.onclick = function (e) {
                e.preventDefault();
                let hash = this.getAttribute('href');
                let target = document.querySelector(hash);
                let headerOffset = 90;
                let elementPosition = target.offsetTop;
                let offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            };
        });

    /* =====================================================
        TRIGGER COUNTERS WHEN REACHING THE TARGET SECTION
    ===================================================== */
    var waypoint = new Waypoint({
        element: document.getElementById('statistics'),
        handler: function (direction) {
            countup();
        },
        offset: '95%',
    });

    /* =====================================================
        BOOTSTRAP SCROLLSPY
    ===================================================== */
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar',
        offset: 100
    });

    /* =====================================================
        MIXITUP FILTER
    ===================================================== */
    var mixer = mixitup('#content');

    /* =====================================================
        REVEAL ANIMATION
    ===================================================== */
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        scrollContainer: null,
        resetAnimation: true,
    });
    wow.init();
});

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
