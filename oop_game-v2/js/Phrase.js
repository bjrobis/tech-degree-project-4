/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
let phraseBox = document.getElementById('phrase').firstElementChild;


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
    let displayArray = this.phrase.split('');
    displayArray.forEach(letter => {
        if (letter !== ' ') {
            let html = `<li class="hide letter ${letter}">${letter}</li>`;
            phraseBox.innerHTML += html;
        } else if (letter === ' ') {
            let html = `<li class="space"> </li>`;
            phraseBox.innerHTML += html;
        }
        });
    }  

    //checks to see if the letter selected by the player matches
    //a letter in the phrase
    checkLetter() {
        let selectedLetter = clicked.innerHTML;
        if (this.phrase.includes(selectedLetter)) {
            return true;
        } else {
            return false;
        }

    }

    //Reveals the letters on the board that match the players selection
    //To reveal the matching letter, select all of the letter DOM
    //elements that have a CSS class name that matchees the selected
    //letter and replace each selected elements 'hide' CSS class
    //with the 'show' CSS class.
    showMatchedLetter() {
        let matchedLetter = document.querySelectorAll(`.${clicked.innerHTML}`);
        matchedLetter.forEach(letter => {
            letter.classList.remove('hide');
            letter.classList.add('show');
        });
    }

}
