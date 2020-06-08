// Event types //
import move from './Events/move.js';
import out from './Events/out.js';

export default class MouseEvents {
    constructor(canvas, contents) {
        // Event types //
        move(canvas, contents);
        out(canvas, contents);
    }
}
