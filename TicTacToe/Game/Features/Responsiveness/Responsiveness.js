import MouseEvents from './../MouseEvents/MouseEvents.js';

export default class Responsiveness {
    constructor(element, canvas, maxSize, contents) {
        let timeOut;
        new ResizeObserver(() => {
            clearTimeout(timeOut);
            timeOut = setTimeout(() => resize(element.offsetWidth, element.offsetHeight), 300);
        }).observe(element);

        function resize(elementWidth, elementHeight) {
            if (elementWidth > maxSize && elementHeight > maxSize)
                setSize(maxSize);
            else
                if (elementHeight > elementWidth)
                    setSize(elementWidth);
                else
                    setSize(elementHeight);

            new MouseEvents(canvas, contents);
        }

        function setSize(value) {
            canvas.width = value;
            canvas.height = value;
            resizeContents(value);
        }

        function resizeContents(value) {
            for (let content in contents) {
                if (Object.prototype.hasOwnProperty.call(contents, content)) {
                    contents[content].resize(value);

                    if (contents[content].active)
                        contents[content].draw(canvas.getContext("2d"));
                }
            }
        }
    }
}
