$(document).ready(function() {
    const bgImg=$(".bg-img");
    const loadingText=$(".loading-text");
    let waitTime=3500;
    let x = setInterval(function() {

         waitTime-=10;

        bgImg.css({
            'filter'         : 'blur('+waitTime/100+'px)',
            '-webkit-filter' : 'blur('+waitTime/100+'px)',
            '-moz-filter'    : 'blur('+waitTime/100+'px)',
            '-o-filter'      : 'blur('+waitTime/100+'px)',
            '-ms-filter'     : 'blur('+waitTime/100+'px)',
        });
        loadingText.css('opacity', (3500-waitTime)/3500);
        if(waitTime%50 === 0)
        loadingText.text(Math.floor((3500-waitTime)/3500*100)+'%')
        if (waitTime < 0) {
            clearInterval(x);
            loadingText.text("I Fully loaded trees, If you see this you HAVE TO plant a tree now..")
        }
    }, 10);
});
