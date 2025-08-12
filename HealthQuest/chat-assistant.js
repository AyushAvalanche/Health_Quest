// AI Chat Assistant functionality
class ChatAssistant {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.responses = this.initializeResponses();
        this.initializeChat();
    }

    initializeChat() {
        const chatToggle = document.getElementById('chat-toggle');
        const chatPopup = document.getElementById('chat-popup');
        const chatClose = document.getElementById('chat-close');
        const chatInput = document.getElementById('chat-input');
        const chatSend = document.getElementById('chat-send');
        const quickActionBtns = document.querySelectorAll('.quick-action-btn');
        const chatNotification = document.getElementById('chat-notification');

        // Toggle chat
        chatToggle.addEventListener('click', () => {
            this.toggleChat();
        });

        // Close chat
        chatClose.addEventListener('click', () => {
            this.closeChat();
        });

        // Send message
        chatSend.addEventListener('click', () => {
            this.sendMessage();
        });

        // Enter key to send
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Quick actions
        quickActionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.getAttribute('data-action');
                this.handleQuickAction(action);
            });
        });

        // Hide notification after first interaction
        chatToggle.addEventListener('click', () => {
            chatNotification.style.display = 'none';
        }, { once: true });
    }

    initializeResponses() {
        return {
            greetings: [
                "Hello! How can I help you with your health concerns today?",
                "Hi there! I'm here to assist you with medical information and guidance.",
                "Welcome! What health-related questions can I help you with?"
            ],
            symptoms: [
                "I can help you understand your symptoms. Can you describe what you're experiencing?",
                "Let's check your symptoms together. What areas of discomfort are you feeling?",
                "I'd be happy to help assess your symptoms. Please tell me more about how you're feeling."
            ],
            firstAid: [
                "I can guide you through first aid procedures. What type of emergency are you dealing with?",
                "For first aid assistance, please describe the situation you're facing.",
                "I'm here to help with first aid guidance. What's the emergency situation?"
            ],
            diseases: [
                "I can provide information about various diseases common in India. What would you like to know?",
                "I have comprehensive information about diseases. Are you looking for symptoms, prevention, or treatment information?",
                "I can help you learn about different health conditions. Which disease interests you?"
            ],
            emergency: [
                "For immediate emergencies, call 112 (National Emergency) or 108 (Medical Emergency). How else can I assist?",
                "Emergency numbers: 112 for general emergencies, 108 for medical. Do you need other emergency information?",
                "In India, call 112 for emergencies or 108 for medical help. What specific emergency information do you need?"
            ],
            general: [
                "I'm here to help with health-related questions. Could you be more specific?",
                "I can assist with symptoms, first aid, diseases, or emergency information. What interests you?",
                "As your health assistant, I can help with medical information. What would you like to know?"
            ],
            disclaimer: [
                "Remember, I provide general information only. For serious concerns, please consult a healthcare professional.",
                "This is general health information. Always seek professional medical advice for proper diagnosis.",
                "Please consult with a doctor for personalized medical advice and proper treatment."
            ]
        };
    }

    toggleChat() {
        const chatPopup = document.getElementById('chat-popup');
        
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        const chatPopup = document.getElementById('chat-popup');
        const chatInput = document.getElementById('chat-input');
        
        chatPopup.classList.remove('hidden');
        this.isOpen = true;
        
        // Focus input after animation
        setTimeout(() => {
            chatInput.focus();
        }, 300);
    }

    closeChat() {
        const chatPopup = document.getElementById('chat-popup');
        
        chatPopup.classList.add('hidden');
        this.isOpen = false;
    }

    sendMessage() {
        const chatInput = document.getElementById('chat-input');
        const message = chatInput.value.trim();
        
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        chatInput.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Generate and show response
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 1500 + Math.random() * 1000); // Random delay for realism
    }

    addMessage(content, sender) {
        const messagesContainer = document.getElementById('chat-messages');
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-${sender === 'bot' ? 'robot' : 'user'}"></i>
            </div>
            <div class="message-content">
                <p>${content}</p>
                <div class="message-time">${time}</div>
            </div>
        `;

        // Remove quick actions if they exist
        const quickActions = messagesContainer.querySelector('.quick-actions');
        if (quickActions && sender === 'user') {
            quickActions.remove();
        }

        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
        
        // Store message
        this.messages.push({ content, sender, time });
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chat-messages');
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typing-indicator';
        
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;

        messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        let responseCategory = 'general';

        // Determine response category based on keywords
        if (this.containsKeywords(lowerMessage, ['hello', 'hi', 'hey', 'good morning', 'good evening'])) {
            responseCategory = 'greetings';
        } else if (this.containsKeywords(lowerMessage, ['symptom', 'pain', 'fever', 'headache', 'cough', 'feeling', 'hurt'])) {
            responseCategory = 'symptoms';
        } else if (this.containsKeywords(lowerMessage, ['first aid', 'emergency', 'accident', 'bleeding', 'burn', 'choking'])) {
            responseCategory = 'firstAid';
        } else if (this.containsKeywords(lowerMessage, ['disease', 'condition', 'illness', 'diabetes', 'hypertension', 'malaria'])) {
            responseCategory = 'diseases';
        } else if (this.containsKeywords(lowerMessage, ['emergency', 'call', 'help', 'urgent', '112', '108'])) {
            responseCategory = 'emergency';
        }

        // Get random response from category
        const responses = this.responses[responseCategory];
        let response = responses[Math.floor(Math.random() * responses.length)];

        // Add disclaimer for medical advice
        if (responseCategory !== 'greetings' && responseCategory !== 'emergency') {
            const disclaimers = this.responses.disclaimer;
            const disclaimer = disclaimers[Math.floor(Math.random() * disclaimers.length)];
            response += `<br><br><small><em>${disclaimer}</em></small>`;
        }

        return response;
    }

    containsKeywords(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }

    handleQuickAction(action) {
        let actionText = '';
        
        switch (action) {
            case 'symptoms':
                actionText = 'I need help checking my symptoms';
                break;
            case 'first-aid':
                actionText = 'I need first aid guidance';
                break;
            case 'emergency':
                actionText = 'I need emergency contact information';
                break;
        }

        if (actionText) {
            this.addMessage(actionText, 'user');
            
            // Generate response
            setTimeout(() => {
                const response = this.generateResponse(actionText);
                this.addMessage(response, 'bot');
            }, 800);
        }

        // Navigate to relevant section
        if (action !== 'emergency') {
            setTimeout(() => {
                this.closeChat();
                if (action === 'symptoms') {
                    navigateToSection('symptom-checker');
                } else if (action === 'first-aid') {
                    navigateToSection('first-aid');
                }
            }, 2000);
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chat-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Advanced features for future enhancement
    saveConversation() {
        localStorage.setItem('medicare_chat_history', JSON.stringify(this.messages));
    }

    loadConversation() {
        const saved = localStorage.getItem('medicare_chat_history');
        if (saved) {
            this.messages = JSON.parse(saved);
            // Optionally restore messages to UI
        }
    }

    clearHistory() {
        this.messages = [];
        localStorage.removeItem('medicare_chat_history');
        
        // Clear UI messages except welcome
        const messagesContainer = document.getElementById('chat-messages');
        const messages = messagesContainer.querySelectorAll('.message');
        messages.forEach((msg, index) => {
            if (index > 0) msg.remove(); // Keep first welcome message
        });

        // Re-add quick actions
        const quickActions = document.createElement('div');
        quickActions.className = 'quick-actions';
        quickActions.innerHTML = `
            <button class="quick-action-btn" data-action="symptoms">
                <i class="fas fa-stethoscope"></i>
                Check Symptoms
            </button>
            <button class="quick-action-btn" data-action="first-aid">
                <i class="fas fa-first-aid"></i>
                First Aid Help
            </button>
            <button class="quick-action-btn" data-action="emergency">
                <i class="fas fa-phone"></i>
                Emergency Info
            </button>
        `;
        messagesContainer.appendChild(quickActions);
    }

    // Get health tips based on user input
    getHealthTip(category = 'general') {
        const tips = {
            general: [
                "💧 Stay hydrated! Drink 8-10 glasses of water daily for optimal health.",
                "🚶‍♀️ Take a 30-minute walk daily to improve cardiovascular health.",
                "😴 Get 7-9 hours of quality sleep each night for better immunity.",
                "🥗 Include more fruits and vegetables in your daily diet.",
                "🧘‍♀️ Practice meditation or deep breathing to reduce stress."
            ],
            seasonal: [
                "☀️ Summer: Stay in shade during 10 AM - 4 PM to avoid heat stroke.",
                "🌧️ Monsoon: Keep your surroundings clean to prevent vector-borne diseases.",
                "❄️ Winter: Maintain hand hygiene to prevent seasonal infections.",
                "🌸 Spring: Be aware of allergies and take necessary precautions."
            ]
        };

        const categoryTips = tips[category] || tips.general;
        return categoryTips[Math.floor(Math.random() * categoryTips.length)];
    }
}

// Initialize chat assistant
document.addEventListener('DOMContentLoaded', () => {
    window.chatAssistant = new ChatAssistant();
    
    // Show a health tip periodically (optional feature)
    setInterval(() => {
        if (!window.chatAssistant.isOpen) {
            const notification = document.getElementById('chat-notification');
            if (notification.style.display === 'none') {
                notification.style.display = 'flex';
                notification.textContent = '💡';
                notification.title = 'New health tip available!';
            }
        }
    }, 300000); // Every 5 minutes
});