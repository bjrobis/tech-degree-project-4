/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
let startScreen = document.getElementById('overlay');

//selects the onscreen keybaord buttons
let keyboard = document.querySelectorAll('.key');


class Game {
    constructor(phrase) {
        this.missed = 0;
        this.phrases = [new Phrase('death by a thousand cuts'), 
                        new Phrase('meet me in the afterglow'), 
                        new Phrase('familiarity breeds contempt'),
                        new Phrase('meet me at midnight'),
                        new Phrase('i remember it all too well')];
        this.activePhrase = null;
    }
/**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */
    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
        
    }
/**
 * Begins game by selecting a random phrase and displaying it to user
 */
    startGame() {
        startScreen.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        
    }

    //checks to see if the player has revelaed all of the letters in the 
    //active phrase
    checkForWin() {
        let remainingLetters = [];
        let hiddenBoxes = document.querySelectorAll('.hide');
        hiddenBoxes.forEach(box => {
            remainingLetters.push(box);
        });
        if (remainingLetters.length === 0) {
            this.gameOver();
        }
    }

    //removes a life from the scoreboard, by replacing one of the 
    //'liveHeart.png' images with a 'loseHeart.png' image and increments
    //the 'missed' property. If the player has five missed guesses
    //then end the game by calling the gameoOver() method.
    removeLife() {
        let hearts = document.querySelectorAll('.tries');
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
        if (this.missed === 4) {
            this.gameOver();
        }
    }

    //Displays the original start screen overlay, and depending on 
    //the outcome of the game, updates the overlay 'h1' elements with
    //a friendly win or loss message, and replaces the overlay's
    //'start' CSS class with either the 'win' or 'lose' CSS class.
    gameOver() {
        startScreen.style.display = 'inline';
        let h1Elements = document.querySelectorAll('h1');
        if (this.missed < 4) {
            h1Elements.forEach(element => {
                element.innerHTML = "Congratulations! You Win!";
                startScreen.classList.remove('start');
                startScreen.classList.add('win');
                this.resetGame();
            });
        } else {
            h1Elements.forEach(element => {
                element.innerHTML = "Sorry! You Lost!";
                startScreen.classList.remove('start');
                startScreen.classList.add('lose');
                this.resetGame();
            });
        }
    }

    handleInteraction() {
        clicked.disabled = true;
        phrase.checkLetter();
        if (phrase.checkLetter() === true) {
            clicked.classList.add('chosen');
            phrase.showMatchedLetter();
            this.checkForWin();
        } else {
            clicked.classList.add('wrong');
            this.removeLife();
            this.checkForWin();
        }
    }

    resetGame() {
        keyboard.forEach(key => {
            key.disabled = false;
            key.classList.remove('chosen');
            key.classList.remove('wrong');
        });

        this.missed = 0;

        let heartImages = document.querySelectorAll('.tries');
        heartImages.forEach(heart => {
            heart.src = 'images/liveHeart.png';
        })

        let listItems = document.getElementById('phrase').children;
        listItems.innerHTML = '';

    }
}