$(document).ready(function() {

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.text(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    animateValue( $('#projectCounter'),0,41,5000);
    animateValue( $('#coffeeCounter'),0,6232,5000);
    animateValue( $('#codeCounter'),0,195239,5000);
});