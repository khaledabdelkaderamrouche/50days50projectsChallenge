$(document).ready(function() {
    const searchButton=$(".fas.fa-search");
    const input=$("#search");
    searchButton.click(function() {
        if(input.hasClass("o-width"))
            input.removeClass('o-width').addClass('full-width')

        else
            input.addClass('o-width').removeClass('full-width')
    });
});
