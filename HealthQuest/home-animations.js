// Enhanced Home Page Animations
class HomeAnimations {
    constructor() {
        this.particlesContainer = document.getElementById('particles');
        this.statsNumbers = document.querySelectorAll('.stat-number');
        this.healthTips = document.querySelectorAll('.health-tip');
        this.currentTipIndex = 0;
        
        this.init();
    }

    init() {
        this.createParticles();
        this.animateStats();
        this.startHealthTipsTicker();
        this.addInteractiveButtons();
        this.addFloatingElementsInteraction();
    }

    createParticles() {
        if (!this.particlesContainer) return;
        
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random animation duration and delay
            particle.style.animationDuration = (3 + Math.random() * 4) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            // Random colors
            const colors = ['var(--primary-color)', 'var(--success-color)', 'var(--warning-color)'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            // Random size
            const size = (2 + Math.random() * 4) + 'px';
            particle.style.width = size;
            particle.style.height = size;
            
            this.particlesContainer.appendChild(particle);
        }
    }

    animateStats() {
        // Stats removed - no animation needed
    }

    startHealthTipsTicker() {
        if (this.healthTips.length === 0) return;

        setInterval(() => {
            this.healthTips[this.currentTipIndex].classList.remove('active');
            this.currentTipIndex = (this.currentTipIndex + 1) % this.healthTips.length;
            this.healthTips[this.currentTipIndex].classList.add('active');
        }, 4000);
    }

    addInteractiveButtons() {
        const interactiveButtons = document.querySelectorAll('.interactive-btn');
        
        interactiveButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = button.querySelector('.btn-ripple');
                
                // Trigger ripple effect
                ripple.style.opacity = '1';
                ripple.style.transform = 'scale(1.5)';
                
                setTimeout(() => {
                    ripple.style.opacity = '0';
                    ripple.style.transform = 'scale(0)';
                }, 600);
                
                // Add bounce effect
                button.style.transform = 'translateY(-5px) scale(0.98)';
                setTimeout(() => {
                    button.style.transform = '';
                }, 150);
            });

            // Hover sound effect simulation
            button.addEventListener('mouseenter', () => {
                button.style.animation = 'pulse 0.3s ease-out';
                setTimeout(() => {
                    button.style.animation = '';
                }, 300);
            });
        });
    }

    addFloatingElementsInteraction() {
        const floatingElements = document.querySelectorAll('.floating-element');
        
        floatingElements.forEach((element, index) => {
            // Click interaction
            element.addEventListener('click', () => {
                this.createBurst(element);
                
                // Random health fact popup
                this.showHealthFact(element, index);
            });

            // Hover effect enhancement
            element.addEventListener('mouseenter', () => {
                element.style.animationPlayState = 'paused';
                element.style.filter = 'brightness(1.2) drop-shadow(0 0 20px rgba(79, 70, 229, 0.6))';
            });

            element.addEventListener('mouseleave', () => {
                element.style.animationPlayState = 'running';
                element.style.filter = '';
            });
        });
    }

    createBurst(element) {
        const rect = element.getBoundingClientRect();
        const burstContainer = document.createElement('div');
        burstContainer.style.position = 'fixed';
        burstContainer.style.left = rect.left + rect.width / 2 + 'px';
        burstContainer.style.top = rect.top + rect.height / 2 + 'px';
        burstContainer.style.pointerEvents = 'none';
        burstContainer.style.zIndex = '9999';

        for (let i = 0; i < 8; i++) {
            const burstParticle = document.createElement('div');
            burstParticle.style.position = 'absolute';
            burstParticle.style.width = '6px';
            burstParticle.style.height = '6px';
            burstParticle.style.background = 'var(--primary-color)';
            burstParticle.style.borderRadius = '50%';
            burstParticle.style.animation = `burst-particle 0.8s ease-out forwards`;
            burstParticle.style.animationDelay = (i * 0.1) + 's';
            
            const angle = (i * 45) * (Math.PI / 180);
            burstParticle.style.setProperty('--dx', Math.cos(angle) * 50 + 'px');
            burstParticle.style.setProperty('--dy', Math.sin(angle) * 50 + 'px');
            
            burstContainer.appendChild(burstParticle);
        }

        document.body.appendChild(burstContainer);

        setTimeout(() => {
            document.body.removeChild(burstContainer);
        }, 1000);
    }

    showHealthFact(element, index) {
        const healthFacts = [
            "💓 Your heart beats about 100,000 times per day!",
            "🧠 Your brain uses 20% of your body's total energy!",
            "🛡️ White blood cells can detect and fight infections!",
            "📊 Regular checkups can prevent 80% of health issues!",
            "🩺 Early diagnosis improves treatment success by 90%!",
            "💊 Proper medication adherence is crucial for recovery!",
            "🧬 Your DNA contains instructions for your entire body!",
            "🔬 Medical research continues to advance treatments!"
        ];

        const tooltip = document.createElement('div');
        tooltip.className = 'health-fact-tooltip';
        tooltip.innerHTML = healthFacts[index] || healthFacts[0];
        tooltip.style.cssText = `
            position: absolute;
            background: linear-gradient(135deg, var(--primary-color), var(--success-color));
            color: white;
            padding: 0.8rem 1.2rem;
            border-radius: 10px;
            font-size: 0.9rem;
            font-weight: 600;
            top: -60px;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
            z-index: 1000;
            opacity: 0;
            animation: tooltip-show 0.3s ease-out forwards;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        `;

        element.appendChild(tooltip);

        setTimeout(() => {
            if (tooltip.parentNode) {
                tooltip.style.animation = 'tooltip-hide 0.3s ease-out forwards';
                setTimeout(() => {
                    if (tooltip.parentNode) {
                        tooltip.parentNode.removeChild(tooltip);
                    }
                }, 300);
            }
        }, 3000);
    }
}

// Add CSS keyframes for animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes burst-particle {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(var(--dx), var(--dy)) scale(0);
        }
    }

    @keyframes tooltip-show {
        0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
        }
        100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    @keyframes tooltip-hide {
        0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
        }
    }

    .particle {
        animation: float-particle 6s infinite ease-in-out !important;
    }

    @keyframes float-particle {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
        }
        25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
        }
        50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 1;
        }
        75% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.7;
        }
    }
`;
document.head.appendChild(styleSheet);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HomeAnimations();
});

// Export for potential use elsewhere
window.HomeAnimations = HomeAnimations;