import TicTacToe from './Game/TicTacToe.js';

// CONFIG --
const design = {
    element: document.body,
    maxSize: 500,
};

const gameConfig = {
    players: [
        {
            marker: 'X',
            bot: false
        },
        {
            marker: 'O',
            bot: false
        },
    ],

    board: {
        grid: 3,
        minStreak: 3,
        allowSquares: false,
    }
}

//

new TicTacToe();
