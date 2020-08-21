export default function out(canvas, contents) {

    canvas.onmouseout = event;

    function event() {
        for (let content in contents) {
            if (Object.prototype.hasOwnProperty.call(contents, content)) {
                contents[content].mouseOut(canvas.getContext("2d"));
            }
        }
    }
}
