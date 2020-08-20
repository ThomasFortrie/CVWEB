$(document).ready(function () {

    var citation = [];
    citation = {
        1: "Quelqu'un de bien ! -un inconnu",
        2: "Je n'ai jamais vu quelqu'un d'aussi investi. -un passant",
        3: "Ce gars ira loin ! Vous pouvez lui faire confiance. -Un voisin",
        4: "Jamais un mot de trop ! -JFK",
        5: "Toi je t'aime bien, tu es sérieux et sympa. -une ancienne collègue",
        6: "La force tranquille. -un Jedi"
    }

    console.log(citation[1])
    var p = $('<p></p>');

    var oldRandom = 0;
    var random = 1
    setInterval(function () {
        // $('#test').fadeOut(500)
        p.innerHTML = ""
        while (oldRandom === random) {

            random = Math.floor((Math.random() * 10) + 1)
        }
        oldRandom = random

        p.text(citation[random]);
        $(p).appendTo($('#test'))
        // $('#test').fadeIn(500)

    }, 5000)




})