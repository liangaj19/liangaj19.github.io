// Cursor glow effect
window.onload = function () {
    const glow = document.querySelector(".cursor-glow");

    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let glowX = mouseX, glowY = mouseY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function followCursor() {
        glowX += (mouseX - glowX) * 0.2;  // Slower delay for smoother effect
        glowY += (mouseY - glowY) * 0.2;

        glow.style.left = `${glowX - 250}px`;
        glow.style.top = `${glowY - 250}px`;

        requestAnimationFrame(followCursor);
    }

    followCursor();
};

// Mobile borgor stack
document.addEventListener('DOMContentLoaded', function() {
    const borgor = document.getElementById('borgor');
    const navBar = document.querySelector('.nav-bar');
    const close = document.getElementById('close-menu');
    const navItems = document.querySelectorAll('.nav-item');

    borgor.addEventListener('click', function() {
        borgor.style.visibility = 'hidden';
        close.style.visibility = 'visible';
        navBar.classList.toggle('active');
    });

    close.addEventListener('click', function() {
        borgor.style.visibility = 'visible';
        close.style.visibility = 'hidden';
        navBar.classList.toggle('active');
    });

    // close the nav bar when user clicks on a nav item
    navItems.forEach(item => {
        item.addEventListener('click', function(){
            borgor.style.visibility = 'visible';
            close.style.visibility = 'hidden';
            navBar.classList.toggle('active');
        });
    });
});

// Highlight the current section the user is in in the nav
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all nav items
                navItems.forEach(item => item.classList.remove('active'));
                
                // Add active class to the current section's nav item
                const activeNavItem = document.querySelector(`.nav-item a[href="#${entry.target.id}"]`).parentElement;
                activeNavItem.classList.add('active');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});