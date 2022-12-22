/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
let startScreen = document.getElementById('overlay');

//selects the onscreen keybaord buttons
let keyboard = document.querySelectorAll('.key');

//selects the h1 element
let h1Elements = document.querySelector('h1');

//win marker to keep track of if player has won the game.
let win = 'no';


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
        win = 'no';
        this.missed = 0;
        
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
        hearts[this.missed].firstChild.src = 'images/lostHeart.png';
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    //Displays the original start screen overlay, and depending on 
    //the outcome of the game, updates the overlay 'h1' elements with
    //a friendly win or loss message, and replaces the overlay's
    //'start' CSS class with either the 'win' or 'lose' CSS class.
    gameOver() {
        startScreen.style.display = 'inline';
        if (this.missed < 5) {
            h1Elements.innerHTML = "You Win!";
            startScreen.classList.remove('start');
            startScreen.classList.remove('lose');
            startScreen.classList.add('win');
            this.resetGame();
            } else {
            h1Elements.innerHTML = "Sorry! You Lost!";
            startScreen.classList.remove('start');
            startScreen.classList.remove('win');
            startScreen.classList.add('lose');
            this.resetGame();
            };
        }

   
   //game hander: disables keys that have already been clicked. Activates checkletter method to see if the letter is 
   //contained in the phrase and applies appropriate consequence based on if letter is correct or incorrect.
        handleInteraction() {
        clicked.disabled = true;
        this.activePhrase.checkLetter();
        if (this.activePhrase.checkLetter() === true) {
            clicked.classList.add('chosen');
            this.activePhrase.showMatchedLetter();
            this.checkForWin();
        } else {
            clicked.classList.add('wrong');
            this.removeLife();
            this.checkForWin();
        }
    }

    //re-enables all the keys and sets the classes back to normal. Also resets the heart images and removes the previously chosen phrase.
    resetGame() {
        keyboard.forEach(key => {
            key.disabled = false;
            key.classList.remove('chosen');
            key.classList.remove('wrong');
        });

        let heartImages = document.querySelectorAll('.tries');
        heartImages.forEach(heart => {
            heart.firstChild.src = 'images/liveHeart.png';
        })

        let listItems = document.getElementById('phrase').firstElementChild;
        listItems.innerHTML = '';

    }
}

