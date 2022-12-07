/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
let phraseBox = document.getElementById('phrase');


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
    let displayArray = this.phrase.split('');
    console.log(displayArray);
        

    }

}

