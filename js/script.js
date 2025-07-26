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
    const navItems = document.querySelectorAll('.nav-item, .item');

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
                
                // Mobile nav
                const activeMobileNavItem = document.querySelector(`.nav-item a[href="#${entry.target.id}"]`);
                if (activeMobileNavItem) {
                    activeMobileNavItem.parentElement.classList.add('active');
                }

                // Main navigation (left panel)
                const activeMainNavItem = document.querySelector(`.main-navigation .item a[href="#${entry.target.id}"]`);
                if (activeMainNavItem) {
                    activeMainNavItem.parentElement.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Also make the nav bar item active when the user clicks on a section bc the above observer is not the most accurate
document.querySelectorAll('.nav-item, .main-navigation .item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item, .main-navigation .item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// Handle nav-bar clicks to contact section
document.querySelectorAll('.main-navigation .item a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').replace('#', '');
        const section = document.getElementById(targetId);
        const rightPanel = document.getElementById('right-panel');
        if (section && rightPanel) {
            e.preventDefault(); // Prevent default anchor jump
            // Calculate offset for sticky header
            const stickyOffset = 80; // Adjust to your sticky header height
            const sectionTop = section.offsetTop - stickyOffset;
            rightPanel.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
    });
});

// When hovering over a list card, make the cursor glow less visible
document.querySelectorAll('.list-card, .contact-input').forEach(card => {
    card.addEventListener('mouseenter', () => {
        document.querySelector('.cursor-glow').style.filter = 'blur(280px)';
    });
    card.addEventListener('mouseleave', () => {
        document.querySelector('.cursor-glow').style.filter = 'blur(200px)'; // default value
    });
});

// Enable smooth scrolling for app accelerator section
document.querySelectorAll('a[href="#app-accelerator"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.getElementById('app-accelerator');
        const rightPanel = document.getElementById('right-panel');
        if (target && rightPanel) {
            e.preventDefault();
            const stickyOffset = 80; // Adjust to your sticky header height
            const sectionTop = target.offsetTop - stickyOffset;
            rightPanel.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
    });
});