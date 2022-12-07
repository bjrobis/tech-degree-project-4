/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(phrase) {
        this.missed = 0;
        this.phrases = ['death by a thousand cuts', 
                        'meet me in the afterglow', 
                        'familiarity breeds contempt',
                        'meet me at midnight',
                        'i remember it all too well'];
        this.activePhrase = null;
    }
/**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */
    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
        this.activePhrase = randomPhrase;
    }
}