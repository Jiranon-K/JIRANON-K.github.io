const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
const skillBars = document.querySelectorAll(".skills-section .progress-bar");
const sections = document.querySelectorAll("section, div[id]");
const heroSection = document.querySelector('#Home');

// Mobile menu control
function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

// Parallax effect for hero section
function parallaxEffect() {
    if (heroSection) {
        const scrollPosition = window.scrollY;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    // Parallax effect
    parallaxEffect();
    
    // Navbar effect
    if (scrollY > 50) {
        navBar.classList.add('bg-white/80', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme/80', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white/50', 'shadow-sm', 'dark:border', 'dark:border-white/20', "dark:bg-glassLight");
    } else {
        navBar.classList.remove('bg-white/80', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme/80', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white/50', 'shadow-sm', 'dark:border', 'dark:border-white/20', "dark:bg-glassLight");
    }
    
    // Reveal elements on scroll
    revealOnScroll();
});

// Reveal elements when scrolled into view with staggered animations
function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('appear');
            
            // Animate children with staggered delay
            const animatableElements = section.querySelectorAll('.animate-on-scroll');
            animatableElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('appear');
                }, 150 * index);
            });
        }
    });
    
    // Animate skill bars when in view
    document.querySelectorAll('.skill-progress').forEach((container, index) => {
        const barTop = container.getBoundingClientRect().top;
        const bar = container.querySelector('.progress-fill');
        
        if (barTop < triggerBottom) {
            setTimeout(() => {
                if (bar) {
                    const percentage = container.getAttribute('data-percentage') || '0%';
                    bar.style.width = percentage;
                }
            }, 300 + (100 * index)); // Staggered animation
        }
    });
}

// Light and dark theme toggle with animation
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    
    // Add transition effect to body
    document.body.classList.add('theme-transition');
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 500);
    
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}

// Initialize dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Smooth scroll behavior for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Typing animation effect for element with .typing-text class
function initTypewriterEffect() {
    const typingTextElements = document.querySelectorAll('.typing-text');
    
    typingTextElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.display = 'inline-block';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing when element is in view
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(element);
                }
            });
        });
        
        observer.observe(element);
    });
}

// Initialize mousemove effect for hover cards
function initHoverEffect() {
    const hoverCards = document.querySelectorAll('.hover-card');
    
    hoverCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// Initialize animations on page load
window.addEventListener('DOMContentLoaded', () => {
    revealOnScroll();
    initTypewriterEffect();
    initHoverEffect();
    
    // Add appear class to elements with delay
    document.querySelectorAll('.hero-element').forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('appear');
        }, 300 * index);
    });
});

// Add resize event listener for responsiveness
window.addEventListener('resize', () => {
    revealOnScroll();
});