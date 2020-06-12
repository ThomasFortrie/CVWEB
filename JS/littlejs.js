$(document).ready(function () {

    setSizes();

    window.onresize = function () {
        setSizes();
    }


    $('#photoProfil').hover(function (e) {



    })


    $(document.body).on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (event.target.classList.contains("thomas")) {
            console.log("test tom");
            eraseChangeDiv();

        }

        if (event.target.classList.contains("thomas")) {
            eraseChangeDiv();
        }

        if (event.target.classList.contains("thomas")) {
            eraseChangeDiv();
        }

        if (event.target.classList.contains("thomas")) {
            eraseChangeDiv();
        }





    })





    // Efface et vide la changeDiv
    function eraseChangeDiv() {
        $('#changeDiv').fadeOut(500);
        setTimeout(function () {
            $('#changeDiv').empty();
        }, 500)
    }


    // Re-création et remplacement texte dans la div principale
    // la variable text sert à remplir la div, et la variable classe sera l'attribut class de la div
    function changeDivGo($text, $class) {
        

    }









    // applique les nouvelles tailles à la div principales
    function setSizes() {
        var height = $(window).height();
        var width = $(window).width();
        console.log(height + " " + width)
        $('#realBody').css({
            "min-height": height,
            "min-width": width
        })
        $('#body').css({
            "height": height,
            "width": width
        })
    }




})