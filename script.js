// Optimized Active State with Intersection Observer
const observerOptions = { threshold: 0.6 };
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => sectionObserver.observe(section));

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
    hamburger.classList.toggle('active');
});

// Typing Effect
const typingElement = document.querySelector('.typing-text');
const words = ['Full-Stack Developer', 'BSIS Student', 'UI/UX Enthusiast'];
let wordIdx = 0, charIdx = 0, isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIdx];
    typingElement.textContent = isDeleting 
        ? currentWord.substring(0, charIdx--) 
        : currentWord.substring(0, charIdx++);

    let speed = isDeleting ? 50 : 150;

    if (!isDeleting && charIdx > currentWord.length) {
        isDeleting = true; speed = 2000; // Pause at end
    } else if (isDeleting && charIdx < 0) {
        isDeleting = false; wordIdx = (wordIdx + 1) % words.length; speed = 500;
    }
    setTimeout(typeEffect, speed);
}
typeEffect();

// Dark Mode Logic
const toggleBtn = document.getElementById('toggleMode');
const toggleIcon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    toggleIcon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Load Theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    toggleIcon.className = 'fas fa-moon';
}
