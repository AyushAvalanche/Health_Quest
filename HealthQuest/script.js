// Main application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();
    
    // Show loading screen and hide main app initially
    const loadingScreen = document.getElementById('loading-screen');
    const mainApp = document.getElementById('main-app');
    
    // Simulate loading time and show main app
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainApp.classList.remove('hidden');
        }, 800);
    }, 3000); // Show loading for 3 seconds
});

// Dark theme only - no theme switching needed
function initializeTheme() {
    // Force dark theme always
    document.documentElement.setAttribute('data-theme', 'dark');
}

// Navigation functionality
function navigateToSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    const targetNavItem = document.querySelector(`[data-section="${sectionId}"]`);
    if (targetNavItem) {
        targetNavItem.classList.add('active');
    }
}

// Add click event listeners to navigation items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item.getAttribute('data-section');
        navigateToSection(sectionId);
    });
});

// Emergency call functionality
function makeCall(phoneNumber) {
    // Check if device supports phone calls
    if (navigator.userAgent.match(/Mobile|Android|iPhone|iPad|iPod|Windows Phone/i)) {
        window.location.href = `tel:${phoneNumber}`;
    } else {
        // For desktop, show phone number in alert
        alert(`Please call: ${phoneNumber}`);
    }
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effects to interactive elements
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('feature-card') || 
        e.target.classList.contains('first-aid-category') ||
        e.target.classList.contains('emergency-card')) {
        e.target.style.transform = 'translateY(-5px)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('feature-card') || 
        e.target.classList.contains('first-aid-category') ||
        e.target.classList.contains('emergency-card')) {
        e.target.style.transform = 'translateY(0)';
    }
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .first-aid-category, .emergency-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
        }
    }
    
    // Arrow key navigation for sections
    if (e.altKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        e.preventDefault();
        const currentSection = document.querySelector('.section.active');
        const sections = ['home', 'symptom-checker', 'first-aid', 'emergency'];
        const currentIndex = sections.indexOf(currentSection.id);
        
        let nextIndex;
        if (e.key === 'ArrowRight') {
            nextIndex = (currentIndex + 1) % sections.length;
        } else {
            nextIndex = (currentIndex - 1 + sections.length) % sections.length;
        }
        
        navigateToSection(sections[nextIndex]);
    }
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Add accessibility improvements
function improveAccessibility() {
    // Add ARIA labels to interactive elements
    document.querySelectorAll('button, .nav-item').forEach(element => {
        if (!element.getAttribute('aria-label') && element.textContent) {
            element.setAttribute('aria-label', element.textContent.trim());
        }
    });
    
    // Add keyboard focus indicators
    document.querySelectorAll('button, .nav-item, .body-part').forEach(element => {
        element.setAttribute('tabindex', '0');
    });
}

// Initialize accessibility improvements
improveAccessibility();

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
