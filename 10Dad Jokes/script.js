$(document).ready(function() {

    getJoke()
    $('#new-joke').click(function() {
        getJoke()
    });
});
function getJoke() {
    var url = "https://icanhazdadjoke.com/";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Accept", "application/json");
     xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200)
               $('#joke').text(JSON.parse(xhr.responseText).joke);
        }
    };

}
