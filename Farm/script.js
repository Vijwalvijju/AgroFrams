document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Close the menu when a link is clicked
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });

    // Add scrolling effect for background
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        document.body.style.backgroundPositionY = `-${scrollY * 0.2}px`;
    });
});
