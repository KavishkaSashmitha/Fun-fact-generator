// app.js
class FunFactGenerator {
    constructor() {
        this.facts = {
            nature: [
                "🌲 The oldest tree in the world is over 5,000 years old!",
                "🐜 Ants never sleep!",
                "🦒 Giraffes have the same number of neck vertebrae as humans"
            ],
            space: [
                "🌠 One day on Venus is longer than its year",
                "🌍 The footprints on the Moon will last for 100 million years",
                "🌌 There are more stars in the universe than grains of sand on Earth"
            ],
            history: [
                "👑 Cleopatra lived closer to the invention of the iPhone than to the building of pyramids",
                "🗽 The Eiffel Tower can be 6 inches taller during the summer",
                "⚔️ Coca-Cola was invented in 1886"
            ]
        };
        
        this.currentCategory = 'all';
        this.initializeElements();
        this.addEventListeners();
    }

    initializeElements() {
        this.generateBtn = document.getElementById('generateBtn');
        this.resultContainer = document.getElementById('result');
        this.factText = document.getElementById('factText');
        this.categoryTag = document.getElementById('categoryTag');
        this.shareBtn = document.getElementById('shareBtn');
        this.categoryBtns = document.querySelectorAll('.category-btn');
    }

    addEventListeners() {
        this.generateBtn.addEventListener('click', () => this.generateFact());
        this.shareBtn.addEventListener('click', () => this.shareFact());
        this.categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setCategory(e.target));
        });
    }

    setCategory(button) {
        this.categoryBtns.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        this.currentCategory = button.dataset.category;
    }

    generateFact() {
        let availableFacts = [];
        
        if (this.currentCategory === 'all') {
            Object.values(this.facts).forEach(categoryFacts => {
                availableFacts = availableFacts.concat(categoryFacts);
            });
        } else {
            availableFacts = this.facts[this.currentCategory];
        }

        const randomFact = availableFacts[Math.floor(Math.random() * availableFacts.length)];Container.style.opacity = '0';
        
        setTimeout(() => {
            this.factText.textContent = randomFact;
            this.categoryTag.textContent = this.currentCategory.toUpperCase();
            this.resultContainer.style.opacity = '1';
        }, 300);
    }

    async shareFact() {
        const fact = this.factText.textContent;
        if (!fact) return;

        try {
            await navigator.clipboard.writeText(fact);
            this.shareBtn.textContent = 'Copied!';
            setTimeout(() => {
                this.shareBtn.textContent = 'Share Fact';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }
}

// Initialize the generator when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FunFactGenerator();
});
