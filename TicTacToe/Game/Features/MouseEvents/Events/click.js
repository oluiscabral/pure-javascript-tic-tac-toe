export default function click(canvas, contents) {

    canvas.onclick = event;

    function event(mouse) {
        for (let content in contents) {
            if (Object.prototype.hasOwnProperty.call(contents, content)) {
                contents[content].mouseClick(mouse.offsetX, mouse.offsetY, canvas.getContext("2d"));
            }
        }
    }
}
