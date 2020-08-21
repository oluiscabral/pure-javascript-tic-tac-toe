import Players from './Players/Players.js';

export default class Core {
    constructor(grid, minStreak, playersConfig) {

        const player = new Players(playersConfig);

        const roundPlays = player.length;
        const maxRound = grid / roundPlays;

        let round = 1;
        let turn = 0;

        this.newMove = (position) => {
            player[turn].move.push(position);

            changeTurn();
        }

        function changeTurn() {
            turn++;

            if (turn == roundPlays) {
                round++;

                if (round >= minStreak)
                    if (round != maxRound)
                        checkStreaks();
                    else
                        console.log("EndGame");
            }
        }

        function checkStreaks() {
            for (let i = 0; i < roundPlays; i++) {
                let lineStreak = 0;
                let diagonalStreak = 0;

                for (let j = 1; j + minStreak <= player[i].moves.length; j++) {
                    if (player[i].move[j][0] == player[i].move[j - 1]) {
                        lineStreak++;
                    } else {
                        lineStreak = 0;
                    }
                }

                if (lineStreak >= minStreak) {
                    return true;
                    break;
                }


                for (let j = 1; j < player[i].moves.length; j++) {
                    if (player.move[j][0] == player[j - 1].move[0]) {
                        lineStreak++;
                    } else {
                        lineStreak = 0;
                    }
                }


                for (let j = 1; j < player[i].moves.length; j++) {
                    if (player.move[j][0] == player[j - 1].move[0]) {
                        lineStreak++;
                    } else {
                        lineStreak = 0;
                    }
                }


                for (let j = 1; j < player[i].moves.length; j++) {
                    if (player.move[j][0] == player[j - 1].move[0]) {
                        lineStreak++;
                    } else {
                        lineStreak = 0;
                    }
                }
            }

            function checkLines(i) {
                let lineStreak = 0;

                for (let k = 0; k < 2 && lineStreak < minStreak; k++)
                    for (let j = 1; j < player[i].move.length; j++) {
                        player[i].move.filter(x => x == 2).length
                    }

            }
        }
    }
