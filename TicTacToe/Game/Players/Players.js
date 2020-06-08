import Player from './Player/Player.js';
import Bots from './Bots/Bots.js';

export default class Players {
    constructor(players) {
        let returnPlayers = [];

        for (let player in players)
            if (!player.bot)
                returnPlayers.push(new Player(player));
            else
                returnPlayers.push(new Bots(player));

        return returnPlayers;
    }
}
