
# 🩺 HealthWise AI – Intelligent Symptom Checker & First Aid Guide

HealthWise AI is an **AI-powered healthcare companion** designed for symptom analysis, first aid guidance, and disease awareness. It features an interactive interface, advanced animations, and a mobile-friendly design, tailored for users in India.

## 📌 Features

### 1. **AI Symptom Checker**
- Interactive **body diagram** for selecting problem areas
- Step-by-step symptom-based **questionnaire**
- AI-powered preliminary analysis and health suggestions
- Dynamic scoring system for urgency detection

### 2. **Comprehensive First Aid Guide**
- Step-by-step instructions for emergencies: CPR, choking, severe bleeding, burns, and more
- Safety tips, warnings, and do’s & don’ts
- Visual guidance for faster learning

### 3. **Disease Information Hub**
- Detailed profiles for common diseases in India
- Categorization by type: **Vector-borne, Infectious, Chronic, Seasonal**
- Prevention tips, symptoms, and description

### 4. **AI Chat Assistant**
- Context-aware responses for health-related queries
- Quick action buttons for emergencies, first aid, or disease info
- Built-in health disclaimer messages

### 5. **User Authentication System**
- Login / Signup with validation and password toggle
- Remember-me session storage in `localStorage`
- Predefined demo credentials + email validation fallback

### 6. **Home Page Enhancements**
- Animated particles & floating medical icons
- Rotating health tips ticker
- Interactive button ripple effects

### 7. **UI/UX Highlights**
- **Loading screen** with animated DNA helix, heartbeat line, and medical cross
- **Dark theme** enforced for better visibility
- Fully **responsive design** for desktop and mobile

---

## 📂 Project Structure

```
/project-root
│
├── index.html              # Main HTML file with all sections and navigation
├── styles.css              # Main styling and responsive design
├── loading.css             # Animated loading screen styles
├── script.js               # App initialization, navigation, and effects
│
├── auth.js                 # Authentication logic (login/signup)
├── chat-assistant.js       # AI Chat assistant interactions
├── diseases.js             # Disease database and filtering
├── first-aid.js            # First aid step-by-step guides
├── home-animations.js      # Particle effects, tips ticker, button animations
├── symptom-checker.js      # Symptom selection and questionnaire logic
│
└── assets/                 # (Optional) Images, icons, or sounds
```

---

## 🚀 Getting Started

### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/your-username/healthwise-ai.git
cd healthwise-ai
```

### 2️⃣ **Open in Browser**
Since this is a **vanilla JS front-end project**, you can open it directly:
```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

Or serve it locally with:
```bash
npx serve
```

---

## 🔑 Demo Login Credentials

| Email                  | Password | Role   |
|------------------------|----------|--------|
| admin                  | 12345    | Admin  |
| demo@example.com       | demo123  | User   |
| test@healthwise.ai     | 12345    | User   |

---

## ⚙️ Technologies Used

- **HTML5** – Structure & semantic layout
- **CSS3** – Styling, responsive design, animations
- **JavaScript (ES6)** – App logic, DOM manipulation, event handling
- **Font Awesome** – Icons
- **Google Fonts** – Poppins & Inter

---

## 📌 Future Improvements

- ✅ API integration for real-time disease data
- ✅ AI/ML symptom diagnosis integration
- ✅ Multi-language support (English, Hindi, etc.)
- ✅ Progressive Web App (PWA) features for offline access

---

## ⚠️ Disclaimer
> This application is for **educational and informational purposes only**.
> It is **not a substitute for professional medical advice**.
> Always consult a qualified healthcare provider for diagnosis and treatment.

---
