// Disease information and filtering functionality
class DiseaseManager {
    constructor() {
        this.diseases = [
            {
                id: 'dengue',
                name: 'Dengue Fever',
                category: 'vector-borne',
                icon: 'fas fa-bug',
                prevalence: 'High prevalence in monsoon season',
                description: 'Viral infection transmitted by Aedes mosquitoes, common during monsoon',
                symptoms: 'High fever, headache, muscle pain, skin rash',
                prevention: 'Remove stagnant water, use mosquito nets',
                searchTerms: ['dengue', 'fever', 'mosquito', 'viral', 'monsoon']
            },
            {
                id: 'tuberculosis',
                name: 'Tuberculosis (TB)',
                category: 'infectious',
                icon: 'fas fa-lungs',
                prevalence: 'Major public health concern',
                description: 'Bacterial infection primarily affecting the lungs',
                symptoms: 'Persistent cough, weight loss, night sweats, fever',
                prevention: 'BCG vaccination, good ventilation, early diagnosis',
                searchTerms: ['tuberculosis', 'tb', 'cough', 'bacterial', 'lungs']
            },
            {
                id: 'diabetes',
                name: 'Diabetes',
                category: 'chronic',
                icon: 'fas fa-heartbeat',
                prevalence: '70+ million affected in India',
                description: 'Metabolic disorder with high blood glucose levels',
                symptoms: 'Frequent urination, excessive thirst, fatigue, blurred vision',
                prevention: 'Healthy diet, regular exercise, weight management',
                searchTerms: ['diabetes', 'blood sugar', 'glucose', 'insulin', 'metabolic']
            },
            {
                id: 'malaria',
                name: 'Malaria',
                category: 'vector-borne',
                icon: 'fas fa-temperature-high',
                prevalence: 'Endemic in many regions',
                description: 'Parasitic disease transmitted by Anopheles mosquitoes',
                symptoms: 'Cyclical fever, chills, headache, sweating',
                prevention: 'Bed nets, antimalarial drugs, eliminate breeding sites',
                searchTerms: ['malaria', 'fever', 'chills', 'mosquito', 'parasitic']
            },
            {
                id: 'hypertension',
                name: 'Hypertension',
                category: 'chronic',
                icon: 'fas fa-heart',
                prevalence: '200+ million affected',
                description: 'High blood pressure, silent killer disease',
                symptoms: 'Often asymptomatic, headaches, dizziness',
                prevention: 'Low salt diet, regular exercise, stress management',
                searchTerms: ['hypertension', 'blood pressure', 'heart', 'silent killer']
            },
            {
                id: 'seasonal-flu',
                name: 'Seasonal Flu',
                category: 'seasonal',
                icon: 'fas fa-thermometer',
                prevalence: 'Peak during winter months',
                description: 'Viral respiratory infection common in winter',
                symptoms: 'Fever, cough, body aches, fatigue',
                prevention: 'Annual vaccination, hand hygiene, avoid crowds',
                searchTerms: ['flu', 'influenza', 'fever', 'cough', 'viral', 'winter']
            },
            {
                id: 'hepatitis-b',
                name: 'Hepatitis B',
                category: 'infectious',
                icon: 'fas fa-tint',
                prevalence: '40+ million chronically infected',
                description: 'Viral infection affecting the liver',
                symptoms: 'Jaundice, fatigue, abdominal pain, dark urine',
                prevention: 'Vaccination, safe blood transfusion, safe sex',
                searchTerms: ['hepatitis', 'liver', 'jaundice', 'viral', 'yellow eyes']
            },
            {
                id: 'chikungunya',
                name: 'Chikungunya',
                category: 'vector-borne',
                icon: 'fas fa-spider',
                prevalence: 'Outbreak prone disease',
                description: 'Viral disease transmitted by Aedes mosquitoes',
                symptoms: 'High fever, severe joint pain, muscle pain, rash',
                prevention: 'Vector control, personal protection, water storage management',
                searchTerms: ['chikungunya', 'joint pain', 'fever', 'mosquito', 'viral']
            },
            {
                id: 'stroke',
                name: 'Stroke',
                category: 'chronic',
                icon: 'fas fa-brain',
                prevalence: '1.8+ million cases annually',
                description: 'Brain attack due to interrupted blood supply',
                symptoms: 'Sudden weakness, speech difficulty, facial drooping',
                prevention: 'Control BP, quit smoking, regular exercise',
                searchTerms: ['stroke', 'brain', 'paralysis', 'speech', 'weakness']
            }
        ];
        this.currentFilter = 'all';
        this.initializeFiltering();
        this.initializeSearch();
    }

    initializeFiltering() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active filter
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Get filter type
                const filter = btn.getAttribute('data-filter');
                this.currentFilter = filter;
                this.filterDiseases(filter);
            });
        });
    }

    initializeSearch() {
        // Add search functionality
        const searchContainer = document.querySelector('.diseases-filter');
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search diseases...';
        searchInput.className = 'disease-search';
        searchInput.style.cssText = `
            padding: 0.75rem 1rem;
            border: 2px solid var(--border);
            border-radius: var(--border-radius);
            background: var(--surface);
            color: var(--text-primary);
            font-size: 0.9rem;
            width: 300px;
            margin-left: 2rem;
        `;

        searchContainer.appendChild(searchInput);

        // Search functionality
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            this.searchDiseases(query);
        });
    }

    filterDiseases(category) {
        const diseaseCards = document.querySelectorAll('.disease-card');
        
        diseaseCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchDiseases(query) {
        if (!query) {
            this.filterDiseases(this.currentFilter);
            return;
        }

        const diseaseCards = document.querySelectorAll('.disease-card');
        
        diseaseCards.forEach(card => {
            const diseaseName = card.querySelector('h3').textContent.toLowerCase();
            const diseaseText = card.textContent.toLowerCase();
            
            // Find matching disease data
            const diseaseData = this.diseases.find(d => 
                d.name.toLowerCase() === diseaseName
            );
            
            let matches = false;
            
            if (diseaseData) {
                matches = diseaseData.searchTerms.some(term => 
                    term.includes(query)
                ) || diseaseText.includes(query);
            } else {
                matches = diseaseText.includes(query);
            }
            
            if (matches) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-out';
                this.highlightSearchTerm(card, query);
            } else {
                card.style.display = 'none';
            }
        });
    }

    highlightSearchTerm(card, term) {
        // Simple highlighting - in a real app, you'd want more sophisticated highlighting
        const textElements = card.querySelectorAll('p, div:not(.disease-icon)');
        
        textElements.forEach(element => {
            const text = element.textContent;
            if (text.toLowerCase().includes(term)) {
                const regex = new RegExp(`(${term})`, 'gi');
                element.innerHTML = element.innerHTML.replace(regex, '<mark style="background: yellow; padding: 0.1rem 0.2rem; border-radius: 3px;">$1</mark>');
            }
        });
        
        // Remove highlights after 3 seconds
        setTimeout(() => {
            const highlights = card.querySelectorAll('mark');
            highlights.forEach(mark => {
                mark.outerHTML = mark.innerHTML;
            });
        }, 3000);
    }

    getDiseaseInfo(diseaseId) {
        return this.diseases.find(disease => disease.id === diseaseId);
    }

    getRelatedDiseases(category, excludeId) {
        return this.diseases
            .filter(disease => disease.category === category && disease.id !== excludeId)
            .slice(0, 3);
    }

    // Disease statistics for India
    getDiseaseStatistics() {
        return {
            totalDiseases: this.diseases.length,
            byCategory: {
                'vector-borne': this.diseases.filter(d => d.category === 'vector-borne').length,
                'chronic': this.diseases.filter(d => d.category === 'chronic').length,
                'infectious': this.diseases.filter(d => d.category === 'infectious').length,
                'seasonal': this.diseases.filter(d => d.category === 'seasonal').length
            },
            mostCommon: ['diabetes', 'hypertension', 'tuberculosis'],
            seasonal: {
                monsoon: ['dengue', 'malaria', 'chikungunya'],
                winter: ['seasonal-flu'],
                summer: ['heat-stroke', 'dehydration']
            }
        };
    }

    // Get prevention tips based on season
    getSeasonalTips() {
        const month = new Date().getMonth();
        let season = '';
        let tips = [];

        // Determine season (India-specific)
        if (month >= 2 && month <= 5) { // March to June
            season = 'Summer';
            tips = [
                'Stay hydrated and drink plenty of water',
                'Avoid direct sunlight during 10 AM to 4 PM',
                'Wear light-colored, loose-fitting clothes',
                'Watch for signs of heat exhaustion'
            ];
        } else if (month >= 6 && month <= 9) { // July to October
            season = 'Monsoon';
            tips = [
                'Eliminate stagnant water to prevent mosquito breeding',
                'Use mosquito nets and repellents',
                'Ensure food and water hygiene',
                'Be alert for symptoms of vector-borne diseases'
            ];
        } else { // November to February
            season = 'Winter';
            tips = [
                'Get annual flu vaccination',
                'Maintain hand hygiene',
                'Keep warm, especially elderly and children',
                'Ensure good ventilation indoors'
            ];
        }

        return { season, tips };
    }
}

// Initialize disease manager
document.addEventListener('DOMContentLoaded', () => {
    window.diseaseManager = new DiseaseManager();
    
    // Add seasonal tips to the diseases section
    const seasonalTips = window.diseaseManager.getSeasonalTips();
    const diseaseSection = document.getElementById('diseases');
    
    if (diseaseSection) {
        const tipsContainer = document.createElement('div');
        tipsContainer.className = 'seasonal-tips';
        tipsContainer.innerHTML = `
            <div class="tips-header">
                <h3><i class="fas fa-calendar-alt"></i> ${seasonalTips.season} Health Tips</h3>
            </div>
            <div class="tips-grid">
                ${seasonalTips.tips.map(tip => `
                    <div class="tip-item">
                        <i class="fas fa-check-circle"></i>
                        <span>${tip}</span>
                    </div>
                `).join('')}
            </div>
        `;
        
        // Add styles
        tipsContainer.style.cssText = `
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 2rem;
            border-radius: var(--border-radius-lg);
            margin: 3rem auto;
            max-width: 1200px;
        `;
        
        // Insert before diseases grid
        const diseaseGrid = diseaseSection.querySelector('.diseases-grid');
        diseaseSection.insertBefore(tipsContainer, diseaseGrid);
    }
});