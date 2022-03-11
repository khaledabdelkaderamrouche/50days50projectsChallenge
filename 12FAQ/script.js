$(document).ready(function() {


    $('i').click(function() {
        $(this).parent().parent().toggleClass('collapsed').toggleClass('open');
    });
});
