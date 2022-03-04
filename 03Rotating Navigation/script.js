$(document).ready(function() {
    const container=$(".container");
    const navigation=$(".navigation");
    const close=$(".close");
    const hamburgerLines=$('.hamburger-lines')
    navigation.click(function() {
        if(container.hasClass('rotated')) {
            container.removeClass('rotated').addClass('not-rotated');
            close.addClass('hidden').removeClass('shown');
            hamburgerLines.addClass('shown').removeClass('hidden');
        }else{
            container.addClass('rotated').removeClass('not-rotated');
            close.removeClass('hidden').addClass('shown');
            hamburgerLines.removeClass('shown').addClass('hidden');
        }
    });
});
