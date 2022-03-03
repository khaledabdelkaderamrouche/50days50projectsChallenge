$(document).ready(function() {
    $('.card').click(function() {
        $(this).removeClass('off').addClass('on');
        $(this).siblings().removeClass('on').addClass('off');
    });
});
