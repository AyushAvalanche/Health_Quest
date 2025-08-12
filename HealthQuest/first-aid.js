// First Aid Guide functionality
class FirstAidGuide {
    constructor() {
        this.guides = {
            cpr: {
                title: 'CPR (Cardiopulmonary Resuscitation)',
                icon: 'fas fa-heart',
                description: 'Life-saving technique for cardiac arrest',
                steps: [
                    {
                        title: 'Check Responsiveness',
                        description: 'Tap the person\'s shoulders firmly and shout "Are you okay?" If no response, call 911 immediately or have someone else do it.',
                        tips: 'Also check for normal breathing - gasping is not normal breathing.'
                    },
                    {
                        title: 'Position the Person',
                        description: 'Place the person on their back on a firm surface. Tilt their head back slightly by lifting their chin.',
                        tips: 'Make sure the airway is open and clear of any visible obstructions.'
                    },
                    {
                        title: 'Position Your Hands',
                        description: 'Place the heel of one hand on the center of the chest between the nipples. Place your other hand on top, interlacing your fingers.',
                        tips: 'Keep your arms straight and shoulders directly over your hands.'
                    },
                    {
                        title: 'Start Chest Compressions',
                        description: 'Push hard and fast at least 2 inches deep. Allow complete chest recoil between compressions. Compress at a rate of 100-120 per minute.',
                        tips: 'Count out loud: "1 and 2 and 3..." Let the chest come back up completely between pushes.'
                    },
                    {
                        title: 'Give Rescue Breaths (if trained)',
                        description: 'After 30 compressions, tilt head back, lift chin, pinch nose closed, and give 2 rescue breaths. Each breath should make the chest rise.',
                        tips: 'If not trained in rescue breathing, continue chest compressions without stopping.'
                    },
                    {
                        title: 'Continue CPR',
                        description: 'Continue cycles of 30 chest compressions and 2 rescue breaths until emergency services arrive or the person starts breathing normally.',
                        tips: 'Don\'t stop CPR unless the person starts breathing normally, emergency services take over, or you become too exhausted.'
                    }
                ],
                warnings: [
                    'Only perform CPR if the person is unresponsive and not breathing normally',
                    'Call 911 before starting CPR',
                    'If available, ask someone to find an AED (Automated External Defibrillator)',
                    'Continue CPR until professional help arrives'
                ]
            },
            choking: {
                title: 'Choking - Heimlich Maneuver',
                icon: 'fas fa-lungs',
                description: 'Emergency procedure for airway obstruction',
                steps: [
                    {
                        title: 'Assess the Situation',
                        description: 'Ask "Are you choking?" If the person can cough or speak, encourage coughing. If they cannot cough, speak, or breathe, begin the Heimlich maneuver.',
                        tips: 'Universal sign of choking is hands clutched to the throat.'
                    },
                    {
                        title: 'Position Yourself',
                        description: 'Stand behind the person and wrap your arms around their waist. For a child, kneel down to their level.',
                        tips: 'Make sure you have firm footing and the person is stable.'
                    },
                    {
                        title: 'Make a Fist',
                        description: 'Place your fist just above the person\'s navel, well below the breastbone. Grasp your fist with your other hand.',
                        tips: 'The thumb side of your fist should be against the person\'s abdomen.'
                    },
                    {
                        title: 'Perform Abdominal Thrusts',
                        description: 'Give quick, upward thrusts into the abdomen. Each thrust should be separate and distinct, aimed at forcing air up from the lungs.',
                        tips: 'Use quick, sharp movements. Don\'t squeeze the ribcage.'
                    },
                    {
                        title: 'Continue Until Object is Expelled',
                        description: 'Keep giving abdominal thrusts until the object is expelled or the person becomes unconscious.',
                        tips: 'If the person becomes unconscious, lower them to the ground and begin CPR.'
                    },
                    {
                        title: 'Follow-up Care',
                        description: 'Even if successful, the person should see a doctor. Abdominal thrusts can cause internal injuries.',
                        tips: 'Watch for signs of difficulty breathing or abdominal pain after the incident.'
                    }
                ],
                warnings: [
                    'Do not perform on infants under 1 year old',
                    'For pregnant women or obese individuals, perform chest thrusts instead',
                    'If person becomes unconscious, start CPR immediately',
                    'Seek medical attention even after successful removal of obstruction'
                ]
            },
            bleeding: {
                title: 'Severe Bleeding Control',
                icon: 'fas fa-tint',
                description: 'Emergency treatment for severe wounds',
                steps: [
                    {
                        title: 'Ensure Safety',
                        description: 'Put on gloves if available to protect yourself from bloodborne pathogens. Ensure the scene is safe before approaching.',
                        tips: 'Your safety comes first. If you can\'t help safely, call for professional help.'
                    },
                    {
                        title: 'Apply Direct Pressure',
                        description: 'Place a clean cloth or sterile gauze directly on the wound and apply firm, steady pressure with your palm.',
                        tips: 'If blood soaks through, add more cloths on top. Do not remove the original cloth.'
                    },
                    {
                        title: 'Elevate if Possible',
                        description: 'If the injury is on an arm or leg and there\'s no suspected fracture, raise the injured area above the level of the heart.',
                        tips: 'Elevation helps reduce blood flow to the area, but direct pressure is more important.'
                    },
                    {
                        title: 'Apply Pressure to Pressure Points',
                        description: 'If bleeding doesn\'t stop with direct pressure, apply pressure to the artery supplying blood to the area.',
                        tips: 'For arm bleeding: press the brachial artery. For leg bleeding: press the femoral artery.'
                    },
                    {
                        title: 'Apply Pressure Bandage',
                        description: 'Once bleeding is controlled, secure the dressing with a bandage. Wrap snugly but not so tight as to cut off circulation.',
                        tips: 'Check fingers or toes beyond the bandage to ensure they remain pink and warm.'
                    },
                    {
                        title: 'Monitor for Shock',
                        description: 'Watch for signs of shock: pale skin, rapid pulse, shallow breathing, confusion. Keep the person warm and lying down.',
                        tips: 'Severe bleeding can lead to shock quickly. Get professional medical help immediately.'
                    }
                ],
                warnings: [
                    'Call 911 immediately for severe bleeding',
                    'Do not remove objects embedded in wounds',
                    'Do not use tourniquets unless you are trained',
                    'Watch for signs of shock and treat accordingly'
                ]
            },
            burns: {
                title: 'Burn Treatment',
                icon: 'fas fa-fire',
                description: 'Emergency care for burn injuries',
                steps: [
                    {
                        title: 'Ensure Safety',
                        description: 'Remove the person from the source of the burn if safe to do so. Turn off electricity, extinguish flames, or remove from heat source.',
                        tips: 'Don\'t put yourself at risk. Call fire department if needed.'
                    },
                    {
                        title: 'Stop the Burning Process',
                        description: 'For fire burns, stop-drop-and-roll. For chemical burns, flush with large amounts of water. Remove hot clothing and jewelry.',
                        tips: 'Remove clothing quickly but carefully. It may be stuck to the skin in severe burns.'
                    },
                    {
                        title: 'Cool the Burn',
                        description: 'Run cool (not cold) water over the burn for 10-20 minutes. This helps reduce pain and prevent further tissue damage.',
                        tips: 'Don\'t use ice or ice water. This can cause more damage to already injured skin.'
                    },
                    {
                        title: 'Assess Burn Severity',
                        description: 'First-degree: red, painful. Second-degree: blistered, very painful. Third-degree: white/charred, may not be painful.',
                        tips: 'Third-degree burns require immediate emergency medical care.'
                    },
                    {
                        title: 'Cover the Burn',
                        description: 'Cover with a sterile gauze bandage or clean cloth. Don\'t use cotton balls or materials that can stick to the burn.',
                        tips: 'Keep the bandage loose. Tight bandages can cut off circulation as swelling occurs.'
                    },
                    {
                        title: 'Manage Pain and Prevent Infection',
                        description: 'Over-the-counter pain relievers can help with pain. Watch for signs of infection: increased redness, swelling, fever, pus.',
                        tips: 'Don\'t break blisters. They protect the underlying skin from infection.'
                    }
                ],
                warnings: [
                    'Seek immediate medical attention for burns larger than 3 inches',
                    'Get emergency care for burns on face, hands, feet, or genitals',
                    'Never apply ice, butter, or ointments to severe burns',
                    'Watch for signs of infection in the following days'
                ]
            },
            fractures: {
                title: 'Fracture (Broken Bone) Care',
                icon: 'fas fa-bone',
                description: 'Emergency treatment for suspected broken bones',
                steps: [
                    {
                        title: 'Assess the Situation',
                        description: 'Look for signs of fracture: severe pain, swelling, deformity, inability to use the limb, bone protruding through skin.',
                        tips: 'Don\'t move the person unless they are in immediate danger.'
                    },
                    {
                        title: 'Control Bleeding',
                        description: 'If there is an open wound with bone visible (compound fracture), control bleeding with direct pressure around the wound, not on the bone.',
                        tips: 'Don\'t try to push bone back under the skin. Cover with sterile dressing.'
                    },
                    {
                        title: 'Immobilize the Injury',
                        description: 'Don\'t try to realign the bone. Splint the fracture as it lies, including the joints above and below the break.',
                        tips: 'Use rigid materials like boards, rolled newspapers, or even another body part for splinting.'
                    },
                    {
                        title: 'Apply Ice',
                        description: 'Apply ice wrapped in a cloth to reduce swelling and pain. Don\'t apply ice directly to the skin.',
                        tips: 'Apply for 15-20 minutes at a time. Too much ice can damage tissue.'
                    },
                    {
                        title: 'Check Circulation',
                        description: 'Check that fingers or toes beyond the injury are warm, pink, and can move. Loosen splint if they become cold or numb.',
                        tips: 'Compare with the uninjured side. Loss of circulation is a medical emergency.'
                    },
                    {
                        title: 'Transport Safely',
                        description: 'Keep the injured area immobilized during transport. For spine injuries, don\'t move the person unless absolutely necessary.',
                        tips: 'Support the injured area during any necessary movement.'
                    }
                ],
                warnings: [
                    'Never try to set a broken bone yourself',
                    'Don\'t give food or water in case surgery is needed',
                    'Treat all spine injuries as serious - don\'t move the person',
                    'Seek immediate medical attention for all suspected fractures'
                ]
            },
            shock: {
                title: 'Shock Treatment',
                icon: 'fas fa-exclamation-triangle',
                description: 'Emergency care for medical shock',
                steps: [
                    {
                        title: 'Recognize the Signs',
                        description: 'Rapid, weak pulse; shallow breathing; pale, cool, clammy skin; confusion or anxiety; nausea; weakness or fatigue.',
                        tips: 'Shock can develop quickly after injury, illness, or blood loss.'
                    },
                    {
                        title: 'Call for Help',
                        description: 'Call 911 immediately. Shock is a life-threatening condition that requires emergency medical treatment.',
                        tips: 'Don\'t wait for symptoms to worsen. Early treatment is crucial.'
                    },
                    {
                        title: 'Position the Person',
                        description: 'If no spinal injury is suspected, lay the person on their back and elevate their legs 8-12 inches.',
                        tips: 'If vomiting is likely, turn them on their side. Don\'t elevate legs if you suspect spine, hip, or leg injuries.'
                    },
                    {
                        title: 'Control Temperature',
                        description: 'Cover the person with a blanket to prevent loss of body heat, but don\'t overheat them.',
                        tips: 'Maintain normal body temperature. Both overheating and cooling can worsen shock.'
                    },
                    {
                        title: 'Don\'t Give Food or Water',
                        description: 'Don\'t give anything by mouth, even if the person complains of thirst. This could cause vomiting or complications if surgery is needed.',
                        tips: 'You can moisten their lips with a damp cloth if they complain of thirst.'
                    },
                    {
                        title: 'Monitor Vital Signs',
                        description: 'Check breathing, pulse, and responsiveness frequently. Be prepared to perform CPR if the person stops breathing.',
                        tips: 'Stay with the person and provide reassurance. Keep them calm and still.'
                    }
                ],
                warnings: [
                    'Shock is a medical emergency - call 911 immediately',
                    'Don\'t move person if spinal injury is suspected',
                    'Never give food, water, or medications',
                    'Be prepared to perform CPR if needed'
                ]
            }
        };
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Modal close functionality
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }
    
    showGuide(guideId) {
        const guide = this.guides[guideId];
        if (!guide) return;
        
        const modal = document.getElementById('first-aid-modal');
        const modalTitle = document.getElementById('modal-title');
        const stepsContainer = document.getElementById('first-aid-steps');
        
        modalTitle.innerHTML = `
            <i class="${guide.icon}"></i>
            ${guide.title}
        `;
        
        stepsContainer.innerHTML = `
            <div class="guide-description">
                <p>${guide.description}</p>
            </div>
            
            <div class="guide-warnings">
                <h4><i class="fas fa-exclamation-triangle"></i> Important Warnings:</h4>
                <ul>
                    ${guide.warnings.map(warning => `<li>${warning}</li>`).join('')}
                </ul>
            </div>
            
            <div class="guide-steps">
                <h4><i class="fas fa-list-ol"></i> Step-by-Step Instructions:</h4>
                ${guide.steps.map((step, index) => `
                    <div class="step">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-content">
                            <h4>${step.title}</h4>
                            <p>${step.description}</p>
                            ${step.tips ? `<div class="step-tip"><i class="fas fa-lightbulb"></i> <strong>Tip:</strong> ${step.tips}</div>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="guide-footer">
                <div class="emergency-reminder">
                    <i class="fas fa-phone"></i>
                    <strong>Remember:</strong> In any emergency, call 911 first, then provide first aid while waiting for professional help.
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add enhanced styling if not already added
        this.addGuideStyles();
    }
    
    closeModal() {
        const modal = document.getElementById('first-aid-modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    addGuideStyles() {
        if (document.querySelector('.guide-styles')) return;
        
        const style = document.createElement('style');
        style.className = 'guide-styles';
        style.textContent = `
            .guide-description {
                background: var(--surface-elevated);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                margin-bottom: 2rem;
                border-left: 4px solid var(--primary-color);
            }
            
            .guide-description p {
                font-size: 1.1rem;
                color: var(--text-primary);
                margin: 0;
            }
            
            .guide-warnings {
                background: #fef3c7;
                border: 2px solid #f59e0b;
                border-radius: var(--border-radius);
                padding: 1.5rem;
                margin-bottom: 2rem;
            }
            
            .guide-warnings h4 {
                color: #92400e;
                margin-bottom: 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .guide-warnings ul {
                margin: 0;
                padding-left: 1.5rem;
                color: #92400e;
            }
            
            .guide-warnings li {
                margin-bottom: 0.5rem;
                font-weight: 500;
            }
            
            .guide-steps h4 {
                color: var(--text-primary);
                margin-bottom: 1.5rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .step {
                display: flex;
                gap: 1.5rem;
                margin-bottom: 2rem;
                padding: 1.5rem;
                background: white;
                border-radius: var(--border-radius);
                box-shadow: var(--shadow-sm);
                border-left: 4px solid var(--primary-color);
                transition: var(--transition);
            }
            
            .step:hover {
                box-shadow: var(--shadow-md);
                transform: translateY(-2px);
            }
            
            .step-number {
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 1.2rem;
                flex-shrink: 0;
                box-shadow: var(--shadow-md);
            }
            
            .step-content h4 {
                color: var(--text-primary);
                margin-bottom: 0.75rem;
                font-size: 1.1rem;
                font-weight: 600;
            }
            
            .step-content p {
                color: var(--text-secondary);
                line-height: 1.6;
                margin-bottom: 1rem;
            }
            
            .step-tip {
                background: #f0f9ff;
                border: 1px solid #bae6fd;
                border-radius: var(--border-radius);
                padding: 1rem;
                color: #0369a1;
                font-size: 0.9rem;
                display: flex;
                align-items: flex-start;
                gap: 0.5rem;
            }
            
            .step-tip i {
                color: #f59e0b;
                margin-top: 0.2rem;
                flex-shrink: 0;
            }
            
            .guide-footer {
                background: #fee2e2;
                border: 2px solid #ef4444;
                border-radius: var(--border-radius);
                padding: 1.5rem;
                margin-top: 2rem;
            }
            
            .emergency-reminder {
                color: #991b1b;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                font-size: 1rem;
            }
            
            .emergency-reminder i {
                font-size: 1.5rem;
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.7; }
            }
            
            @media (max-width: 768px) {
                .step {
                    flex-direction: column;
                    text-align: center;
                }
                
                .step-number {
                    align-self: center;
                    margin-bottom: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize first aid guide
const firstAidGuide = new FirstAidGuide();

// Global functions
function showFirstAidGuide(guideId) {
    firstAidGuide.showGuide(guideId);
}

function closeFirstAidModal() {
    firstAidGuide.closeModal();
}

// Add click handlers for first aid categories
document.addEventListener('DOMContentLoaded', function() {
    // Handle first aid category clicks
    document.querySelectorAll('.first-aid-category').forEach(category => {
        category.addEventListener('click', function() {
            const categoryId = this.dataset.category;
            if (categoryId) {
                showFirstAidGuide(categoryId);
            }
        });
    });
});
