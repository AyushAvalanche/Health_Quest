// Symptom Checker functionality
class SymptomChecker {
    constructor() {
        this.currentBodyPart = null;
        this.selectedSymptoms = [];
        this.currentQuestionIndex = 0;
        this.questions = [];
        this.responses = [];
        this.bodyParts = {
            head: {
                name: 'Head',
                symptoms: [
                    'Headache', 'Migraine', 'Dizziness', 'Fever', 
                    'Nausea', 'Vision problems', 'Hearing problems'
                ],
                questions: [
                    {
                        question: "How severe is your pain on a scale of 1-10?",
                        options: [
                            { text: "1-3 (Mild)", value: "mild", points: 1 },
                            { text: "4-6 (Moderate)", value: "moderate", points: 2 },
                            { text: "7-10 (Severe)", value: "severe", points: 3 }
                        ]
                    },
                    {
                        question: "How long have you been experiencing these symptoms?",
                        options: [
                            { text: "Less than 24 hours", value: "recent", points: 1 },
                            { text: "1-3 days", value: "short", points: 2 },
                            { text: "More than a week", value: "chronic", points: 3 }
                        ]
                    },
                    {
                        question: "Do you have any of these additional symptoms?",
                        options: [
                            { text: "Fever or chills", value: "fever", points: 2 },
                            { text: "Nausea or vomiting", value: "nausea", points: 2 },
                            { text: "Vision changes", value: "vision", points: 3 },
                            { text: "None of the above", value: "none", points: 0 }
                        ]
                    },
                    {
                        question: "Are you currently taking any medications?",
                        options: [
                            { text: "Yes, prescription medications", value: "prescription", points: 1 },
                            { text: "Yes, over-the-counter medications", value: "otc", points: 1 },
                            { text: "No medications", value: "none", points: 0 }
                        ]
                    },
                    {
                        question: "Have you experienced similar symptoms before?",
                        options: [
                            { text: "Yes, frequently", value: "frequent", points: 1 },
                            { text: "Yes, occasionally", value: "occasional", points: 1 },
                            { text: "No, this is the first time", value: "first", points: 2 }
                        ]
                    }
                ]
            },
            neck: {
                name: 'Neck',
                symptoms: [
                    'Sore throat', 'Neck pain', 'Stiff neck', 'Swollen glands',
                    'Difficulty swallowing', 'Hoarse voice'
                ],
                questions: [
                    {
                        question: "What type of neck discomfort are you experiencing?",
                        options: [
                            { text: "Stiffness and limited movement", value: "stiff", points: 2 },
                            { text: "Sharp, shooting pain", value: "sharp", points: 3 },
                            { text: "Dull, aching pain", value: "dull", points: 1 },
                            { text: "Throat pain when swallowing", value: "throat", points: 2 }
                        ]
                    },
                    {
                        question: "When did the symptoms start?",
                        options: [
                            { text: "Suddenly, within hours", value: "sudden", points: 2 },
                            { text: "Gradually over days", value: "gradual", points: 1 },
                            { text: "After sleeping in wrong position", value: "sleep", points: 1 }
                        ]
                    },
                    {
                        question: "Do you have any accompanying symptoms?",
                        options: [
                            { text: "Fever", value: "fever", points: 3 },
                            { text: "Swollen lymph nodes", value: "swollen", points: 2 },
                            { text: "Headache", value: "headache", points: 2 },
                            { text: "None", value: "none", points: 0 }
                        ]
                    },
                    {
                        question: "Does the pain radiate to other areas?",
                        options: [
                            { text: "Yes, to shoulders or arms", value: "radiate", points: 2 },
                            { text: "Yes, to head", value: "head", points: 2 },
                            { text: "No, localized to neck", value: "localized", points: 1 }
                        ]
                    },
                    {
                        question: "Have you had any recent injuries or stress?",
                        options: [
                            { text: "Recent injury or accident", value: "injury", points: 3 },
                            { text: "High stress or tension", value: "stress", points: 1 },
                            { text: "No recent changes", value: "none", points: 0 }
                        ]
                    }
                ]
            },
            chest: {
                name: 'Chest',
                symptoms: [
                    'Chest pain', 'Shortness of breath', 'Cough', 'Palpitations',
                    'Wheezing', 'Tightness', 'Burning sensation'
                ],
                questions: [
                    {
                        question: "Describe your chest pain:",
                        options: [
                            { text: "Sharp, stabbing pain", value: "sharp", points: 3 },
                            { text: "Crushing or squeezing", value: "crushing", points: 4 },
                            { text: "Burning sensation", value: "burning", points: 2 },
                            { text: "Dull, aching pain", value: "dull", points: 1 }
                        ]
                    },
                    {
                        question: "Are you experiencing shortness of breath?",
                        options: [
                            { text: "Yes, severe difficulty breathing", value: "severe", points: 4 },
                            { text: "Yes, mild shortness of breath", value: "mild", points: 2 },
                            { text: "No breathing problems", value: "none", points: 0 }
                        ]
                    },
                    {
                        question: "Does the pain spread to other areas?",
                        options: [
                            { text: "Yes, to left arm or jaw", value: "arm_jaw", points: 4 },
                            { text: "Yes, to back or neck", value: "back_neck", points: 3 },
                            { text: "No, stays in chest", value: "localized", points: 1 }
                        ]
                    },
                    {
                        question: "What triggers or worsens the pain?",
                        options: [
                            { text: "Physical activity", value: "activity", points: 3 },
                            { text: "Deep breathing or coughing", value: "breathing", points: 2 },
                            { text: "Eating", value: "eating", points: 1 },
                            { text: "Nothing specific", value: "none", points: 2 }
                        ]
                    },
                    {
                        question: "Do you have any of these additional symptoms?",
                        options: [
                            { text: "Nausea, sweating, dizziness", value: "cardiac", points: 4 },
                            { text: "Cough with phlegm", value: "cough", points: 2 },
                            { text: "Acid taste in mouth", value: "acid", points: 1 },
                            { text: "None of these", value: "none", points: 0 }
                        ]
                    }
                ]
            },
            'left-arm': {
                name: 'Left Arm',
                symptoms: [
                    'Arm pain', 'Numbness', 'Weakness', 'Tingling',
                    'Swelling', 'Limited movement'
                ],
                questions: [
                    {
                        question: "What type of sensation are you experiencing?",
                        options: [
                            { text: "Sharp, shooting pain", value: "sharp", points: 3 },
                            { text: "Numbness or tingling", value: "numbness", points: 2 },
                            { text: "Weakness or heaviness", value: "weakness", points: 3 },
                            { text: "Dull, aching pain", value: "dull", points: 1 }
                        ]
                    },
                    {
                        question: "Where is the discomfort located?",
                        options: [
                            { text: "Entire arm", value: "entire", points: 2 },
                            { text: "Shoulder to elbow", value: "upper", points: 2 },
                            { text: "Elbow to hand", value: "lower", points: 1 },
                            { text: "Just the hand/fingers", value: "hand", points: 1 }
                        ]
                    },
                    {
                        question: "Are you also experiencing chest symptoms?",
                        options: [
                            { text: "Yes, chest pain or pressure", value: "chest_pain", points: 4 },
                            { text: "Yes, shortness of breath", value: "breathless", points: 3 },
                            { text: "No chest symptoms", value: "none", points: 0 }
                        ]
                    },
                    {
                        question: "Did this start after any specific activity?",
                        options: [
                            { text: "Heavy lifting or exercise", value: "exercise", points: 1 },
                            { text: "Repetitive motions", value: "repetitive", points: 1 },
                            { text: "No specific trigger", value: "sudden", points: 2 }
                        ]
                    },
                    {
                        question: "How long have you had these symptoms?",
                        options: [
                            { text: "Just started (minutes to hours)", value: "acute", points: 3 },
                            { text: "1-2 days", value: "recent", points: 2 },
                            { text: "Several days to weeks", value: "chronic", points: 1 }
                        ]
                    }
                ]
            },
            'right-arm': {
                name: 'Right Arm',
                symptoms: [
                    'Arm pain', 'Numbness', 'Weakness', 'Tingling',
                    'Swelling', 'Limited movement'
                ],
                questions: [
                    {
                        question: "What type of sensation are you experiencing?",
                        options: [
                            { text: "Sharp, shooting pain", value: "sharp", points: 2 },
                            { text: "Numbness or tingling", value: "numbness", points: 2 },
                            { text: "Weakness or heaviness", value: "weakness", points: 2 },
                            { text: "Dull, aching pain", value: "dull", points: 1 }
                        ]
                    },
                    {
                        question: "Where is the discomfort located?",
                        options: [
                            { text: "Entire arm", value: "entire", points: 2 },
                            { text: "Shoulder to elbow", value: "upper", points: 2 },
                            { text: "Elbow to hand", value: "lower", points: 1 },
                            { text: "Just the hand/fingers", value: "hand", points: 1 }
                        ]
                    },
                    {
                        question: "Did this start after any specific activity?",
                        options: [
                            { text: "Heavy lifting or exercise", value: "exercise", points: 1 },
                            { text: "Repetitive motions (typing, etc.)", value: "repetitive", points: 2 },
                            { text: "Sleeping on arm wrong", value: "sleep", points: 1 },
                            { text: "No specific trigger", value: "sudden", points: 2 }
                        ]
                    },
                    {
                        question: "Does movement make it better or worse?",
                        options: [
                            { text: "Much worse with movement", value: "worse", points: 2 },
                            { text: "Better with gentle movement", value: "better", points: 1 },
                            { text: "No change with movement", value: "none", points: 1 }
                        ]
                    },
                    {
                        question: "How long have you had these symptoms?",
                        options: [
                            { text: "Just started (minutes to hours)", value: "acute", points: 2 },
                            { text: "1-2 days", value: "recent", points: 1 },
                            { text: "Several days to weeks", value: "chronic", points: 2 }
                        ]
                    }
                ]
            },
            abdomen: {
                name: 'Abdomen',
                symptoms: [
                    'Stomach pain', 'Nausea', 'Vomiting', 'Bloating',
                    'Diarrhea', 'Constipation', 'Loss of appetite'
                ],
                questions: [
                    {
                        question: "Where is your abdominal pain located?",
                        options: [
                            { text: "Upper abdomen (stomach area)", value: "upper", points: 2 },
                            { text: "Lower right abdomen", value: "lower_right", points: 3 },
                            { text: "Lower left abdomen", value: "lower_left", points: 2 },
                            { text: "All over abdomen", value: "general", points: 2 }
                        ]
                    },
                    {
                        question: "How would you describe the pain?",
                        options: [
                            { text: "Sharp, stabbing", value: "sharp", points: 3 },
                            { text: "Cramping", value: "cramping", points: 2 },
                            { text: "Burning", value: "burning", points: 2 },
                            { text: "Dull, constant ache", value: "dull", points: 1 }
                        ]
                    },
                    {
                        question: "Are you experiencing nausea or vomiting?",
                        options: [
                            { text: "Severe vomiting", value: "severe_vomiting", points: 3 },
                            { text: "Mild nausea", value: "mild_nausea", points: 1 },
                            { text: "No nausea or vomiting", value: "none", points: 0 }
                        ]
                    },
                    {
                        question: "Have you had any changes in bowel movements?",
                        options: [
                            { text: "Severe diarrhea", value: "diarrhea", points: 2 },
                            { text: "Constipation", value: "constipation", points: 1 },
                            { text: "Blood in stool", value: "blood", points: 3 },
                            { text: "Normal bowel movements", value: "normal", points: 0 }
                        ]
                    },
                    {
                        question: "When did the pain start and how has it changed?",
                        options: [
                            { text: "Sudden onset, getting worse", value: "worsening", points: 3 },
                            { text: "Gradual onset, steady", value: "gradual", points: 1 },
                            { text: "Comes and goes", value: "intermittent", points: 2 }
                        ]
                    }
                ]
            },
            'left-leg': {
                name: 'Left Leg',
                symptoms: [
                    'Leg pain', 'Swelling', 'Cramps', 'Numbness',
                    'Weakness', 'Difficulty walking'
                ],
                questions: [
                    {
                        question: "What type of discomfort are you experiencing?",
                        options: [
                            { text: "Sharp, shooting pain", value: "sharp", points: 2 },
                            { text: "Muscle cramps", value: "cramps", points: 1 },
                            { text: "Swelling", value: "swelling", points: 2 },
                            { text: "Numbness or tingling", value: "numbness", points: 2 }
                        ]
                    },
                    {
                        question: "Where in your leg is the problem?",
                        options: [
                            { text: "Hip or upper thigh", value: "upper", points: 2 },
                            { text: "Knee area", value: "knee", points: 1 },
                            { text: "Calf or shin", value: "lower", points: 2 },
                            { text: "Foot or ankle", value: "foot", points: 1 }
                        ]
                    },
                    {
                        question: "Did this start after any activity or injury?",
                        options: [
                            { text: "Recent injury or fall", value: "injury", points: 3 },
                            { text: "After exercise or long walking", value: "exercise", points: 1 },
                            { text: "Long period of sitting/standing", value: "position", points: 2 },
                            { text: "No specific cause", value: "none", points: 1 }
                        ]
                    },
                    {
                        question: "Are you able to bear weight on the leg?",
                        options: [
                            { text: "Cannot bear weight at all", value: "no_weight", points: 3 },
                            { text: "Can bear weight but painful", value: "painful", points: 2 },
                            { text: "Can bear weight normally", value: "normal", points: 0 }
                        ]
                    },
                    {
                        question: "Do you have any additional symptoms?",
                        options: [
                            { text: "Leg feels hot or red", value: "hot_red", points: 3 },
                            { text: "Leg feels cold", value: "cold", points: 2 },
                            { text: "No other symptoms", value: "none", points: 0 }
                        ]
                    }
                ]
            },
            'right-leg': {
                name: 'Right Leg',
                symptoms: [
                    'Leg pain', 'Swelling', 'Cramps', 'Numbness',
                    'Weakness', 'Difficulty walking'
                ],
                questions: [
                    {
                        question: "What type of discomfort are you experiencing?",
                        options: [
                            { text: "Sharp, shooting pain", value: "sharp", points: 2 },
                            { text: "Muscle cramps", value: "cramps", points: 1 },
                            { text: "Swelling", value: "swelling", points: 2 },
                            { text: "Numbness or tingling", value: "numbness", points: 2 }
                        ]
                    },
                    {
                        question: "Where in your leg is the problem?",
                        options: [
                            { text: "Hip or upper thigh", value: "upper", points: 2 },
                            { text: "Knee area", value: "knee", points: 1 },
                            { text: "Calf or shin", value: "lower", points: 2 },
                            { text: "Foot or ankle", value: "foot", points: 1 }
                        ]
                    },
                    {
                        question: "Did this start after any activity or injury?",
                        options: [
                            { text: "Recent injury or fall", value: "injury", points: 3 },
                            { text: "After exercise or long walking", value: "exercise", points: 1 },
                            { text: "Long period of sitting/standing", value: "position", points: 2 },
                            { text: "No specific cause", value: "none", points: 1 }
                        ]
                    },
                    {
                        question: "Are you able to bear weight on the leg?",
                        options: [
                            { text: "Cannot bear weight at all", value: "no_weight", points: 3 },
                            { text: "Can bear weight but painful", value: "painful", points: 2 },
                            { text: "Can bear weight normally", value: "normal", points: 0 }
                        ]
                    },
                    {
                        question: "Do you have any additional symptoms?",
                        options: [
                            { text: "Leg feels hot or red", value: "hot_red", points: 3 },
                            { text: "Leg feels cold", value: "cold", points: 2 },
                            { text: "No other symptoms", value: "none", points: 0 }
                        ]
                    }
                ]
            }
        };
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Body part selection
        document.querySelectorAll('.body-part').forEach(part => {
            part.addEventListener('click', (e) => {
                this.selectBodyPart(e.target.dataset.part);
            });
        });
    }
    
    selectBodyPart(partId) {
        // Clear previous selections
        document.querySelectorAll('.body-part').forEach(part => {
            part.classList.remove('selected');
        });
        
        // Select new part
        const selectedPart = document.querySelector(`[data-part="${partId}"]`);
        if (selectedPart) {
            selectedPart.classList.add('selected');
            this.currentBodyPart = partId;
            this.showSymptomOptions(partId);
        }
    }
    
    showSymptomOptions(partId) {
        const bodyPart = this.bodyParts[partId];
        if (!bodyPart) return;
        
        const selectionDiv = document.getElementById('symptom-selection');
        selectionDiv.innerHTML = `
            <h3>Select symptoms for ${bodyPart.name}</h3>
            <p>Choose all symptoms that apply:</p>
            <div class="symptom-options">
                ${bodyPart.symptoms.map(symptom => `
                    <div class="symptom-option" data-symptom="${symptom}">
                        <i class="fas fa-plus-circle"></i>
                        <span>${symptom}</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn-primary" onclick="symptomChecker.startQuestionnaire()" style="margin-top: 2rem;">
                <i class="fas fa-arrow-right"></i>
                Continue with Assessment
            </button>
        `;
        
        // Add event listeners to symptom options
        document.querySelectorAll('.symptom-option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.toggleSymptom(e.currentTarget);
            });
        });
    }
    
    toggleSymptom(optionElement) {
        const symptom = optionElement.dataset.symptom;
        const icon = optionElement.querySelector('i');
        
        if (optionElement.classList.contains('selected')) {
            optionElement.classList.remove('selected');
            icon.className = 'fas fa-plus-circle';
            this.selectedSymptoms = this.selectedSymptoms.filter(s => s !== symptom);
        } else {
            optionElement.classList.add('selected');
            icon.className = 'fas fa-check-circle';
            this.selectedSymptoms.push(symptom);
        }
    }
    
    startQuestionnaire() {
        if (this.selectedSymptoms.length === 0) {
            alert('Please select at least one symptom to continue.');
            return;
        }
        
        // Hide symptom selection and show questions
        document.getElementById('symptom-selection').classList.add('hidden');
        document.getElementById('symptom-questions').classList.remove('hidden');
        
        // Initialize questions
        this.questions = this.bodyParts[this.currentBodyPart].questions;
        this.currentQuestionIndex = 0;
        this.responses = [];
        
        this.showCurrentQuestion();
    }
    
    showCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        
        // Update progress bar
        document.querySelector('.progress-fill').style.width = `${progress}%`;
        document.querySelector('.progress-text').textContent = 
            `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
        
        // Show question
        document.getElementById('current-question').textContent = question.question;
        
        // Show options
        const optionsContainer = document.getElementById('question-options');
        optionsContainer.innerHTML = question.options.map((option, index) => `
            <div class="question-option" onclick="symptomChecker.selectOption(${index})">
                <span>${option.text}</span>
            </div>
        `).join('');
    }
    
    selectOption(optionIndex) {
        const question = this.questions[this.currentQuestionIndex];
        const selectedOption = question.options[optionIndex];
        
        // Store response
        this.responses.push({
            question: question.question,
            answer: selectedOption.text,
            value: selectedOption.value,
            points: selectedOption.points
        });
        
        // Move to next question or show results
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
            setTimeout(() => this.showCurrentQuestion(), 500);
        } else {
            setTimeout(() => this.showResults(), 500);
        }
    }
    
    showResults() {
        // Hide questions and show results
        document.getElementById('symptom-questions').classList.add('hidden');
        document.getElementById('symptom-results').classList.remove('hidden');
        
        // Calculate total severity score
        const totalPoints = this.responses.reduce((sum, response) => sum + response.points, 0);
        const maxPoints = this.questions.length * 4; // Assuming max 4 points per question
        const severityPercentage = (totalPoints / maxPoints) * 100;
        
        let urgency, recommendation, urgencyClass;
        
        if (severityPercentage >= 70 || totalPoints >= 15) {
            urgency = 'HIGH PRIORITY';
            urgencyClass = 'high-priority';
            recommendation = `
                <div class="urgent-warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    <strong>Seek immediate medical attention</strong>
                </div>
                <p>Based on your symptoms, we recommend that you:</p>
                <ul>
                    <li>Contact emergency services (911) if symptoms are severe</li>
                    <li>Visit an emergency room or urgent care center</li>
                    <li>Contact your healthcare provider immediately</li>
                </ul>
                <p><strong>Do not ignore these symptoms.</strong> Early medical intervention can be crucial.</p>
            `;
        } else if (severityPercentage >= 40 || totalPoints >= 8) {
            urgency = 'MODERATE PRIORITY';
            urgencyClass = 'moderate-priority';
            recommendation = `
                <p>Based on your symptoms, we recommend that you:</p>
                <ul>
                    <li>Schedule an appointment with your healthcare provider within 1-2 days</li>
                    <li>Monitor your symptoms closely</li>
                    <li>Contact a healthcare provider if symptoms worsen</li>
                    <li>Consider visiting urgent care if symptoms persist or worsen</li>
                </ul>
                <p>Your symptoms warrant medical evaluation, but may not require immediate emergency care.</p>
            `;
        } else {
            urgency = 'LOW PRIORITY';
            urgencyClass = 'low-priority';
            recommendation = `
                <p>Based on your symptoms, you may consider:</p>
                <ul>
                    <li>Self-care and rest</li>
                    <li>Over-the-counter remedies if appropriate</li>
                    <li>Scheduling a routine appointment with your healthcare provider</li>
                    <li>Monitoring symptoms and seeking care if they worsen or persist</li>
                </ul>
                <p>Your symptoms appear to be mild, but consult a healthcare provider if you have concerns.</p>
            `;
        }
        
        const resultsContent = document.getElementById('results-content');
        resultsContent.innerHTML = `
            <div class="assessment-summary">
                <div class="urgency-level ${urgencyClass}">
                    <h4>${urgency}</h4>
                    <div class="severity-meter">
                        <div class="severity-fill" style="width: ${severityPercentage}%"></div>
                    </div>
                </div>
                
                <div class="selected-symptoms">
                    <h4>Selected Symptoms:</h4>
                    <div class="symptom-tags">
                        ${this.selectedSymptoms.map(symptom => 
                            `<span class="symptom-tag">${symptom}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="recommendations">
                    <h4>Recommendations:</h4>
                    ${recommendation}
                </div>
                
                <div class="disclaimer">
                    <p><strong>Important:</strong> This assessment is for informational purposes only and should not replace professional medical advice. Always consult with a healthcare provider for accurate diagnosis and treatment.</p>
                </div>
            </div>
        `;
        
        // Add CSS for severity meter if not already added
        if (!document.querySelector('.severity-styles')) {
            const style = document.createElement('style');
            style.className = 'severity-styles';
            style.textContent = `
                .urgency-level {
                    text-align: center;
                    margin-bottom: 2rem;
                    padding: 1rem;
                    border-radius: var(--border-radius);
                }
                .high-priority {
                    background: #fee2e2;
                    color: #991b1b;
                    border: 2px solid #ef4444;
                }
                .moderate-priority {
                    background: #fef3c7;
                    color: #92400e;
                    border: 2px solid #f59e0b;
                }
                .low-priority {
                    background: #d1fae5;
                    color: #065f46;
                    border: 2px solid #10b981;
                }
                .severity-meter {
                    width: 100%;
                    height: 8px;
                    background: rgba(0,0,0,0.1);
                    border-radius: 4px;
                    overflow: hidden;
                    margin-top: 1rem;
                }
                .severity-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #10b981, #f59e0b, #ef4444);
                    transition: width 1s ease;
                }
                .symptom-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-top: 0.5rem;
                }
                .symptom-tag {
                    background: var(--primary-color);
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    font-size: 0.9rem;
                }
                .urgent-warning {
                    background: #fee2e2;
                    color: #991b1b;
                    padding: 1rem;
                    border-radius: var(--border-radius);
                    border: 2px solid #ef4444;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .urgent-warning i {
                    font-size: 1.5rem;
                }
                .recommendations ul {
                    padding-left: 1.5rem;
                    margin: 1rem 0;
                }
                .recommendations li {
                    margin-bottom: 0.5rem;
                }
                .disclaimer {
                    background: var(--surface-elevated);
                    padding: 1rem;
                    border-radius: var(--border-radius);
                    margin-top: 1.5rem;
                    font-size: 0.9rem;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    restart() {
        // Reset all state
        this.currentBodyPart = null;
        this.selectedSymptoms = [];
        this.currentQuestionIndex = 0;
        this.responses = [];
        
        // Clear selections
        document.querySelectorAll('.body-part').forEach(part => {
            part.classList.remove('selected');
        });
        
        // Show initial selection panel
        document.getElementById('symptom-selection').classList.remove('hidden');
        document.getElementById('symptom-questions').classList.add('hidden');
        document.getElementById('symptom-results').classList.add('hidden');
        
        // Reset selection panel
        const selectionDiv = document.getElementById('symptom-selection');
        selectionDiv.innerHTML = `
            <h3>Select a body part to begin</h3>
            <p>Click on any area of the body diagram to see common symptoms for that region.</p>
        `;
    }
}

// Initialize symptom checker
const symptomChecker = new SymptomChecker();

// Global function for restarting
function restartSymptomChecker() {
    symptomChecker.restart();
}
