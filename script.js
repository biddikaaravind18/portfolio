// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// File Upload Display
const resumeFile = document.getElementById('resumeFile');
const fileName = document.getElementById('fileName');

resumeFile.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        fileName.textContent = `Selected file: ${e.target.files[0].name}`;
        fileName.style.color = 'var(--success)';
    } else {
        fileName.textContent = '';
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For demonstration, we'll just show an alert
    alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
    
    // Reset form
    contactForm.reset();
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-bar');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width') / 100;
        if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
            bar.style.setProperty('--width', width);
            bar.classList.add('animated');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Initial check and add scroll listener
animateSkillBars();
window.addEventListener('scroll', animateSkillBars);

// Theme Toggle functionality
const themeToggle = document.getElementById('themeToggle');
let isDarkTheme = false;

themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    
    if (isDarkTheme) {
        // Switch to dark theme
        document.documentElement.style.setProperty('--background', 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)');
        document.documentElement.style.setProperty('--card-bg', 'rgba(30, 30, 46, 0.9)');
        document.documentElement.style.setProperty('--text-dark', '#E2E8F0');
        document.documentElement.style.setProperty('--text-light', '#A0AEC0');
        document.documentElement.style.setProperty('--white', '#1A202C');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        // Switch back to original theme
        document.documentElement.style.setProperty('--background', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
        document.documentElement.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.95)');
        document.documentElement.style.setProperty('--text-dark', '#2D3748');
        document.documentElement.style.setProperty('--text-light', '#4A5568');
        document.documentElement.style.setProperty('--white', '#FFFFFF');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add floating animation to skills
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect to hero text
const heroTitle = document.querySelector('.hero h1');
const originalText = heroTitle.textContent;
let charIndex = 0;

function typeWriter() {
    if (charIndex < originalText.length) {
        heroTitle.textContent = originalText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    heroTitle.textContent = '';
    setTimeout(typeWriter, 1000);
});

// Add scroll animation to sections
const sections = document.querySelectorAll('section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize sections with hidden state
sections.forEach(section => {
    if (!section.classList.contains('hero')) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
});

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Add particle effect to hero section
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    document.querySelector('.hero').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 15000);
}

// Create particles periodically
setInterval(createParticle, 300);

// Add CSS for particles
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: white;
        border-radius: 50%;
        animation: floatParticle linear infinite;
        pointer-events: none;
    }
    
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) rotate(0deg);
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);