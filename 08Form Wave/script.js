$(document).ready(function() {
    const email=$("#email-placeholder");
    const password=$("#password-placeholder");

    $('input').focusin(function() {

        $(this).prev('span').children().each(function () {
            const id=($(this).attr('id')).match(/\d+/);
            $(this).css('transform', 'translateY(-35px)');
            $(this).css('transition-delay',id*0.10+'s');
        });
    });
    $('input').focusout(function() {
        $(this).prev('span').children().css('transform', 'translateY(0px)');
    });

});
