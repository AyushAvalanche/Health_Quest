// Authentication functionality
class AuthManager {
    constructor() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.initializeAuth();
    }

    initializeAuth() {
        // Check for existing session
        const savedUser = localStorage.getItem('healthwise_user');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.isLoggedIn = true;
            this.updateNavigation();
        }

        // Initialize event listeners
        this.setupAuthTabs();
        this.setupPasswordToggle();
        this.setupFormValidation();
        this.setupSocialLogin();
    }

    setupAuthTabs() {
        const authTabs = document.querySelectorAll('.auth-tab');
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        const authTitle = document.getElementById('auth-title');
        const authSubtitle = document.getElementById('auth-subtitle');

        authTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                authTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Switch forms
                const tabType = tab.getAttribute('data-tab');
                if (tabType === 'login') {
                    loginForm.classList.add('active');
                    signupForm.classList.remove('active');
                    authTitle.textContent = 'Sign In';
                    authSubtitle.textContent = 'Access your personalized health dashboard';
                } else {
                    signupForm.classList.add('active');
                    loginForm.classList.remove('active');
                    authTitle.textContent = 'Create Account';
                    authSubtitle.textContent = 'Join HealthWise AI for intelligent health guidance';
                }
            });
        });
    }

    setupPasswordToggle() {
        const toggleBtns = document.querySelectorAll('.password-toggle');
        
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                const input = document.getElementById(targetId);
                const icon = btn.querySelector('i');

                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        });
    }

    setupFormValidation() {
        const authForm = document.getElementById('auth-form');
        
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const activeTab = document.querySelector('.auth-tab.active').getAttribute('data-tab');
            
            if (activeTab === 'login') {
                this.handleLogin(new FormData(authForm));
            } else {
                this.handleSignup(new FormData(authForm));
            }
        });
    }

    setupSocialLogin() {
        const socialBtns = document.querySelectorAll('.social-btn');
        
        socialBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const provider = btn.classList.contains('google') ? 'Google' : 'Facebook';
                this.showNotification(`${provider} login would redirect to authentication service`, 'info');
            });
        });
    }

    handleLogin(formData) {
        const email = formData.get('email');
        const password = formData.get('password');
        const remember = formData.get('remember');

        // Demo login credentials
        const validCredentials = [
            { email: 'admin', password: '12345', name: 'Admin User', role: 'admin' },
            { email: 'demo@example.com', password: 'demo123', name: 'Demo User', role: 'user' },
            { email: 'test@healthwise.ai', password: '12345', name: 'Test User', role: 'user' }
        ];

        // Check for valid credentials or fallback to email validation
        const validUser = validCredentials.find(cred => 
            (cred.email === email || cred.email === email.toLowerCase()) && cred.password === password
        );

        if (validUser) {
            const user = {
                id: Date.now(),
                email: validUser.email.includes('@') ? validUser.email : `${validUser.email}@healthwise.ai`,
                name: validUser.name,
                role: validUser.role,
                loginTime: new Date().toISOString()
            };

            this.currentUser = user;
            this.isLoggedIn = true;
            
            if (remember) {
                localStorage.setItem('healthwise_user', JSON.stringify(user));
            }

            this.updateNavigation();
            this.showNotification(`Login successful! Welcome back, ${user.name}.`, 'success');
            
            // Redirect to home
            setTimeout(() => {
                navigateToSection('home');
            }, 1500);
        } else if (this.validateEmail(email) && password.length >= 6) {
            // Fallback for any valid email format
            const user = {
                id: Date.now(),
                email: email,
                name: email.split('@')[0],
                role: 'user',
                loginTime: new Date().toISOString()
            };

            this.currentUser = user;
            this.isLoggedIn = true;
            
            if (remember) {
                localStorage.setItem('healthwise_user', JSON.stringify(user));
            }

            this.updateNavigation();
            this.showNotification('Login successful! Welcome back.', 'success');
            
            // Redirect to home
            setTimeout(() => {
                navigateToSection('home');
            }, 1500);
        } else {
            this.showNotification('Invalid credentials. Try: admin/12345 or any valid email/password', 'error');
        }
    }

    handleSignup(formData) {
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        const agreeTerms = formData.get('terms');

        // Validation
        if (!firstName || !lastName || !this.validateEmail(email) || !phone) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }

        if (password.length < 6) {
            this.showNotification('Password must be at least 6 characters long', 'error');
            return;
        }

        if (password !== confirmPassword) {
            this.showNotification('Passwords do not match', 'error');
            return;
        }

        if (!agreeTerms) {
            this.showNotification('Please accept the Terms & Conditions', 'error');
            return;
        }

        // Demo signup - in real app, this would be API call
        const user = {
            id: Date.now(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            name: `${firstName} ${lastName}`,
            signupTime: new Date().toISOString()
        };

        this.currentUser = user;
        this.isLoggedIn = true;
        localStorage.setItem('healthwise_user', JSON.stringify(user));

        this.updateNavigation();
        this.showNotification('Account created successfully! Welcome to HealthWise AI', 'success');
        
        // Redirect to home
        setTimeout(() => {
            navigateToSection('home');
        }, 1500);
    }

    logout() {
        this.currentUser = null;
        this.isLoggedIn = false;
        localStorage.removeItem('healthwise_user');
        this.updateNavigation();
        this.showNotification('You have been logged out', 'info');
        navigateToSection('home');
    }

    updateNavigation() {
        const loginBtn = document.querySelector('.nav-item[data-section="login"]');
        
        if (this.isLoggedIn) {
            loginBtn.innerHTML = `
                <i class="fas fa-user-circle"></i>
                <span>${this.currentUser.name || 'User'}</span>
            `;
            loginBtn.onclick = () => this.showUserMenu();
        } else {
            loginBtn.innerHTML = `
                <i class="fas fa-user"></i>
                <span>Login</span>
            `;
            loginBtn.onclick = () => navigateToSection('login');
        }
    }

    showUserMenu() {
        // Simple user menu - in real app, this could be a dropdown
        const action = confirm('Logged in as ' + this.currentUser.name + '\n\nClick OK to logout or Cancel to view profile');
        if (action) {
            this.logout();
        } else {
            this.showNotification('Profile features coming soon!', 'info');
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease-out;
        `;

        // Add animation keyframes
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
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
                
                .notification-close {
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    padding: 0.25rem;
                    margin-left: auto;
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        const removeNotification = () => {
            if (notification.parentNode) {
                notification.style.animation = 'slideInRight 0.3s ease-out reverse';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        };

        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', removeNotification);
        
        setTimeout(removeNotification, 5000);
    }
}

// Initialize authentication manager
document.addEventListener('DOMContentLoaded', () => {
    window.authManager = new AuthManager();
});