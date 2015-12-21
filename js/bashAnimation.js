var myDescription = "My name is Alex or Chenxing. My dream is to become a Computational Scientist & Physicist. I am deeply puzzled by the complexity of life and the universe, and I wish to know more about them. I love breakdancing, playing guitar, making games, drawing anime characters and watching anime! I also enjoy reading in fields related to math, physics, philosophy and psychology! Learning is what keeps me alive!";

var textArray = myDescription.split("");
var loopTimer;
var setToday;
var doneShowingText = false;

function frameLooper() {
    if (textArray.length > 0 && !doneShowingText) {
        $('#myTypingText')[0].innerHTML += textArray.shift();
    } else {
        clearTimeout(loopTimer);
        doneShowingText = true;
        console.log("done");
    }
    loopTimer = setTimeout('frameLooper()', 20);
}

function getFormattedDate() {
    var date = new Date();

    var str = date.getFullYear() + "-" +
        (date.getMonth() + 1) + "-" +
        date.getDate() + " " +
        date.getHours() + ":" +
        date.getMinutes() + ":" +
        date.getSeconds();
    return str;
}


// Run the function when all the elements are loaded
$(document).ready(function () {
    setToday = $('#newTime')[0].outerHTML = "(" + getFormattedDate() + ")";

    frameLooper();

});