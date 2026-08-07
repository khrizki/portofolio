// ===== DOM Elements =====
const preloader = document.querySelector('.preloader');
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const skillBars = document.querySelectorAll('.skill-progress');
const statNumbers = document.querySelectorAll('.stat-number');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// ===== Preloader =====
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 500);
});

// ===== Navigation =====
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Navbar scroll effect
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScroll = currentScroll;

    // Back to top button
    if (currentScroll > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }

    // Trigger animations
    animateOnScroll();
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
});

// ===== Back to Top =====
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Skills Animation =====
function animateSkills() {
    skillBars.forEach(bar => {
        const width = bar.dataset.width;
        bar.style.width = width;
    });
}

// ===== Stats Counter Animation =====
function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + '+';
            }
        };

        updateCounter();
    });
}

// ===== Scroll Animations =====
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');

                // Trigger skills animation
                if (entry.target.classList.contains('skills')) {
                    animateSkills();
                }

                // Trigger stats animation
                if (entry.target.classList.contains('about-text')) {
                    animateStats();
                }
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe individual elements
    document.querySelectorAll('.skill-card, .project-card, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations
animateOnScroll();

// ===== Projects Filter =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===== Contact Form =====
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    const submitBtn = contactForm.querySelector('.btn-primary');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Mengirim...</span>';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.innerHTML = '<span>Terkirim! ✓</span>';
        submitBtn.style.background = 'var(--success)';

        // Reset form
        contactForm.reset();

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 2000);

        // Show success message (you can customize this)
        showNotification('Pesan berhasil dikirim! Terima kasih telah menghubungi.', 'success');
    }, 1500);
});

// ===== Notification System =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--accent-primary)',
        borderRadius: '12px',
        color: 'var(--text-primary)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease',
        maxWidth: '350px'
    });

    // Add animation keyframes
    if (!document.querySelector('#notificationStyles')) {
        const style = document.createElement('style');
        style.id = 'notificationStyles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ===== Typing Effect for Hero =====
const heroName = document.querySelector('.hero-name');
if (heroName) {
    // Nama sudah statis: Khairul Rizky
    // Tidak ada typing effect untuk nama agar lebih profesional
}

// ===== Cursor Effect (Optional) =====
// Create a custom cursor that follows the mouse
function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    Object.assign(cursor.style, {
        width: '20px',
        height: '20px',
        border: '2px solid var(--accent-primary)',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: '9998',
        transition: 'transform 0.1s ease',
        display: 'none'
    });
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.display = 'block';
    });

    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Hover effect for links and buttons
    const hoverElements = document.querySelectorAll('a, button, .btn');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform += ' scale(1.5)';
            cursor.style.borderColor = 'var(--accent-secondary)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
            cursor.style.borderColor = 'var(--accent-primary)';
        });
    });
}

// Uncomment to enable custom cursor
// createCustomCursor();

// ===== Parallax Effect for Hero Shapes =====
const shapes = document.querySelectorAll('.shape-1, .shape-2, .shape-3');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const x = mouseX * speed;
        const y = mouseY * speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===== Lazy Loading for Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Console Easter Egg =====
console.log(
    '%c👋 Hello there, curious developer!',
    'font-size: 20px; font-weight: bold; color: #6366f1;'
);
console.log(
    '%cInterested in the code? Check out the GitHub repository!',
    'font-size: 14px; color: #a1a1aa;'
);
console.log(
    '%cBuilt with HTML5, CSS3, and JavaScript ES6+',
    'font-size: 12px; color: #71717a;'
);

// ===== Service Worker Registration (for PWA) =====
if ('serviceWorker' in navigator) {
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/sw.js')
    //         .then(reg => console.log('Service Worker registered'))
    //         .catch(err => console.log('Service Worker registration failed'));
    // });
}

// ===== Performance Monitoring =====
window.addEventListener('load', () => {
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`⚡ Page Load Time: ${pageLoadTime}ms`);
});
