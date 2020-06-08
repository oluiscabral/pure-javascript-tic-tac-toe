import TicTacToe from './Game/TicTacToe.js';

// CONFIG --
const design = {
    element: document.body,
    maxSize: 500,
};

const players = [
    {
        marker: 'X',
        bot: false
    },
    {
        marker: 'O',
        bot: false
    },
];
//

new TicTacToe(design, players);
