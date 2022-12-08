/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

//stores e.target into a variable
let clicked;

let button = document.getElementById('btn__reset');
let letterButton = document.querySelectorAll('.key');

//when the start game button is clicked it begins a new game
button.addEventListener('click', e => {
    game = new Game();
    game.startGame();
});

//Controls handle interaction with all the buttons
letterButton.forEach(button => {
    button.addEventListener('click', e => {
        clicked = e.target;
        game.handleInteraction();
    })
});