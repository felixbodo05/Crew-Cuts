// ==========================================
// GLITCH TEXT EFFECT - Vanilla JavaScript
// ==========================================

class GlitchText {
    constructor(element, options = {}) {
        this.element = element;
        this.originalText = element.textContent;
        this.duration = options.duration || 800;
        this.animateOnLoad = options.animateOnLoad !== false;
        this.isAnimating = false;
        this.iterations = 0;

        this.alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        this.element._glitchInstance = this;
        this.init();
    }

    init() {
        // Add hover listener
        this.element.addEventListener('mouseenter', () => this.triggerAnimation());

        // Optionally animate on load
        if (this.animateOnLoad) {
            setTimeout(() => this.triggerAnimation(), 300);
        }
    }

    getRandomChar() {
        return this.alphabets[Math.floor(Math.random() * this.alphabets.length)];
    }

    triggerAnimation() {
        if (this.isAnimating) return;

        this.isAnimating = true;
        this.iterations = 0;

        const chars = this.originalText.split('');
        const totalChars = chars.length;
        const intervalDuration = this.duration / (totalChars * 10);

        const interval = setInterval(() => {
            if (this.iterations >= totalChars) {
                clearInterval(interval);
                this.element.textContent = this.originalText;
                this.isAnimating = false;
                return;
            }

            const displayChars = chars.map((char, index) => {
                if (char === ' ') return ' ';

                if (index <= Math.floor(this.iterations)) {
                    return this.originalText[index];
                } else {
                    return this.getRandomChar();
                }
            });

            this.element.textContent = displayChars.join('');
            this.iterations += 0.1;

        }, intervalDuration);
    }
}

// Initialize all glitch text elements
document.addEventListener('DOMContentLoaded', () => {
    const glitchElements = document.querySelectorAll('.glitch-text');

    glitchElements.forEach(element => {
        new GlitchText(element, {
            duration: 800,
            animateOnLoad: element.dataset.animateOnLoad !== 'false'
        });
    });
});
