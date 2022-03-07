$(document).ready(function() {
    const a1 = new Audio("sounds/1.wav");
    const a2 = new Audio("sounds/2.wav");
    const a3 = new Audio("sounds/3.wav");
    const a4 = new Audio("sounds/4.wav");
    const a5 = new Audio("sounds/5.wav");
    const a6 = new Audio("sounds/6.wav");

    $('#1').click(function() {
        a1.play();
    });
    $('#2').click(function() {
        a2.play();
    });
    $('#3').click(function() {
        a3.play();
    });
    $('#4').click(function() {
        a4.play();
    });
    $('#5').click(function() {
        a5.play();
    });
    $('#6').click(function() {
        a6.play();
    });




});
