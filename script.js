window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.accouncer');

//create the board

let board = ['','','','','','','','','',];
let currentPlayer = 'X';
let isGameActive = true;

//win, lose, tie

const PLAYERX_WON = 'PLAYERX_WON!!!';
const PLAYERO_WON = 'PLAYERO_WON!!!';
const TIE = 'TIE!';

//create winning scenarios

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

//have users switch after turn
const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.classList.add(`player${currentPlayer}`);
}

    //set Up the User's actions
const userAction = (tile, index) => {
    if(isValidAction(tile) && isGameActive) {
        tile.innerText = currentPlayer;
        tile.classList.add(`player${currentPlayer}`);
        updateBoard(index) ;
        handleResultValidation();
        changePlayer();
    }
}





});