// Music Toggle
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');

// Auto-play with muted first (to bypass browser restrictions)
music.volume = 0.5;
music.muted = true;
music.play().then(() => {
  music.muted = false;
}).catch(error => {
  console.log("Auto-play prevented:", error);
});

// Toggle button
musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.innerHTML = '<i class="fas fa-music"></i>';
  } else {
    music.pause();
    musicBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Check saved theme or system preference
const currentTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply theme
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Animate on scroll
const animateElements = () => {
    const elements = document.querySelectorAll('.gallery-item, .gallery h2');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.animationPlayState = 'running';
        }
    });
};

// Run on load and scroll
window.addEventListener('load', animateElements);
window.addEventListener('scroll', animateElements);