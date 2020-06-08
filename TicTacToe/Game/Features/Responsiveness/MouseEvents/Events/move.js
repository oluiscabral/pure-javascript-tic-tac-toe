export default function move(canvas, contents) {

    canvas.onmousemove = event;

    function event(mouse) {
        for (let content in contents) {
            if (Object.prototype.hasOwnProperty.call(contents, content)) {
                contents[content].mouseMove(mouse.offsetX, mouse.offsetY, canvas.getContext("2d"));
            }
        }
    }
}
