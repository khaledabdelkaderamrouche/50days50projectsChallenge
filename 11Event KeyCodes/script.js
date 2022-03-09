$(document).ready(function() {


    $(document).keypress(function(e) {
        $('#key').text("Key:"+e.key);
        $('#keyCode').text("keyCode:"+e.keyCode);
        $('#code').text("Code:"+e.code);
        $('.buttons').css('display', 'block');


    });
});
