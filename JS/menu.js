$(document).ready(function(){

    $('#menu_icon').on('click',function(e){
        e.stopPropagation();
        e.preventDefault();
        $('#menu').animate({right: '200px'});
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
            $('#menu').animate({right: '-200px'});

        }

    })

})