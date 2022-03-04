$(document).ready(function() {
    const boxes=$(".content");
    boxes.click(function() {
       console.log($(this).scrollTop() + $(window).height());
       console.log($(this).offset().top);
       console.log($(this).scrollTop() + $(window).height() > $(this).offset().top);
    });
    let pos =$(window).scrollTop() + $(window).height()
    boxes.each(function(){
        const offset =$(this).offset();
        if (pos > offset.top) {
            $(this).addClass("show");
        } else {
            $(this).removeClass("show");
        }
    });

    $(window).scroll(function() {
        pos = $(this).scrollTop() + $(window).height();
        let i=0;
        boxes.each(function(){
            i++;
            const offset =$(this).offset();
            console.log("POS"+pos)
            console.log(i+":"+offset.top)
            if (pos > offset.top) {
                $(this).addClass("show");
            }
            if (pos<offset.top+100)  {
                $(this).removeClass("show");
            }
        });

    });
});
