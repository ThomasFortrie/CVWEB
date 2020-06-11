$(document).ready(function(){

    $('#menu_icon').on('click',function(e){
        e.stopPropagation();
        e.preventDefault();
        $('#menu').fadeIn(500);
        $('#menu_icon').fadeOut(500);
        // $('#menu').animate({right: '200px'});
    })

    // $('#body').on('click', function(){

    //     $('#menu').animate({right: '-200px'});
    // })

var $mouseOut = false;

    /* On écoute les clique souris de la page */
    /* Pour fermer  SI LE CLIQUE A LIEU EN DEHORS DES 2 FENETRES DE CONNEXION*/
    $(document.body).on('click', function (e) {
        e.stopPropagation();
        console.log(event.target.classList);
        if (event.target.classList.contains("clickDiv")) {
            $mouseOut = false;
        } else {
            $mouseOut = true;
        }

        if ($mouseOut == true) {
            $('#menu').fadeOut(500);
            $('#menu_icon').fadeIn(500);
            // $('#menu').animate({right: '-200px'});

        }

    })

})