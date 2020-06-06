export default function setResponsiveness(canvas, content) {
    let timeOutFunctionId;
    new ResizeObserver(() => {
        resize(element.offsetWidth, element.offsetHeight);
        clearTimeout(timeOutFunctionId);
        timeOutFunctionId = setTimeout(updateEventListeners, 500);
    }).observe(element);

    function resize(elementWidth, elementHeight) {
        if (elementWidth > maxSize && elementHeight > maxSize)
            setSize(maxSize);
        else
            if (elementHeight > elementWidth)
                setSize(elementWidth);
            else
                setSize(elementHeight);
    }

    function setSize(value) {
        canvas.size = value;
        resizeContents(value);
    }

    function resizeContents(value) {
        Object.keys(content).forEach(function (key) {
            content[key].resize(value);
        });
    }
}
