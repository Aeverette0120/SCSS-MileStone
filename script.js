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

// add in winning consitions

function handleResultValidation() {
    let roundWon = false;
    for (let i =0; i <= 7; i++) {
        const winningCondition = winningConditions[i];
        const a = board [winningCondition[0]];
        const b = board [winningCondition[1]];
        const c = board [winningCondition[2]];
        if (a === '' || b === '' || c=== '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }

    }
        if(roundWon) {
            announcer(currentPlayer == 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

        if (!board.includes(''))
        announcer(TIE);
}

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