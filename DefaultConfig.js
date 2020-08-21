export default class DefaultConfig {
    static canvas = {
        // Essential (it has to have an inputed value) //
        element: undefined,

        // Optionals //
        width: undefined,
        min_width: 300,
        max_width: 500,

        height: undefined,
        min_height: 400,
        max_height: 600,

        name: 'TicTacToe',
        id: 'TicTacToe',

        background_color: 'black',
        content_color: 'white',
    }

    static game = {
        // Optionals //
        grid_size: 3,
        min_streak: 3,
        allow_squares: false,
        min_square_size: 2,

        power_ups: false,
        disabled_power_ups: null,

        players: [
            {
                name: 'Player 1',
                marker: 'X'
            }
        ],

        bots: [
            {
                name: 'Bot 1',
                marker: 'O'
            }
        ],

        info_panel: {
            onTop: false,
            hideable: true
        }
    }
}
