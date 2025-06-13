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

    borgor.addEventListener('click', function() {
        // navBar.style.display = 'block';
        borgor.style.visibility = 'hidden';
        close.style.visibility = 'visible';
        navBar.classList.toggle('active');
    });

    close.addEventListener('click', function() {
        // navBar.style.display = 'none';
        borgor.style.visibility = 'visible';
        close.style.visibility = 'hidden';
        navBar.classList.toggle('active');
    });
});