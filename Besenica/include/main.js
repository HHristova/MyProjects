$(document).ready(function () {

    var words = ["Avstralia", "Russia", "Bulgaria", "Lithuania", "Finlandia"];
    var number = words.length;
    var randomWord = Math.floor(Math.random() * number - 1) + 1;

    var chosenWord = words[randomWord];
    var star = "*";


    var chosenLetters = Array();
    for (var i = 0; i < chosenWord.length; i++) {
        if (i != 0 && i != chosenWord.length - 1) {
            chosenLetters.push(chosenWord[i]);
        }
    }
    console.log(chosenLetters);

    for (var i = 0; i < chosenWord.length; i++) {
        if (i != 0 && i != chosenWord.length - 1) {
            chosenWord = chosenWord.replace(chosenWord[i], star);
        }
    }

    $("#word-container").html(chosenWord);

    var imgNumber = 1;

    $("#button").click(function () {
        var guessedLetter = $("#letter").val();
        $("#letter").val("");

        if (chosenLetters.join("").indexOf(guessedLetter) != -1) {
            for (var i = 0; i < chosenLetters.length; i++) {
                if (guessedLetter == chosenLetters[i]) {
                    chosenWord = chosenWord.split("");
                    chosenWord[i + 1] = chosenLetters[i];
                    chosenWord = chosenWord.join("");
                    if(chosenWord.indexOf(star) == -1) {
                        $("#img-container").html("<p style='color: #009900;'>You win! :-) </p><a href=''>Try again!</a>");
                    }
                }
            }
            $("#word-container").html(chosenWord);
        }
        else {
            imgNumber = imgNumber + 1;
            if (imgNumber <= 6) {
                $("#img-container").html("<img src='images/" + imgNumber + ".jpg' alt='' />");
            }
            else {
                $("#img-container").html("<p style='color: #ff0000;'>You loose :-(</p>");
            }
        }

    });

});