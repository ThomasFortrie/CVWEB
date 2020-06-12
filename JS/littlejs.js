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
        // THOMAS
        if (event.target.classList.contains("thomas")) {
            console.log("test tom");
            console.log(document.getElementById("changeDiv").classList);
            if (document.getElementById("changeDiv").classList.contains("thomas")) {
                console.log("contient Thomas")
            } else {
                eraseChangeDiv();
                // CHANGEMENT ET AFFICHAGE DE LA CHANGEDIV
                
            }


        }
        // TECHNOS
        if (event.target.classList.contains("technos")) {
            console.log("test techno");
            if (document.getElementById("changeDiv").classList.contains("technos")) {

            } else {
                eraseChangeDiv();
                // CHANGEMENT ET AFFICHAGE DE LA CHANGEDIV
            }
        }
        
        // PROJETS
        if (event.target.classList.contains("projets")) {
            console.log("test projet");
            if (document.getElementById("changeDiv").classList.contains("projets")) {
                
            } else {
                eraseChangeDiv();
                // CHANGEMENT ET AFFICHAGE DE LA CHANGEDIV
                
            }
        }
        
        // CONTACT
        if (event.target.classList.contains("contact")) {
            console.log("test contact");
            if (document.getElementById("changeDiv").classList.contains("contact")) {
                
            } else {
                eraseChangeDiv();
                // CHANGEMENT ET AFFICHAGE DE LA CHANGEDIV
                
            }
        }
        
        
        
        
        
    })
    
    
    
    
    
    // Efface et vide la changeDiv
    function eraseChangeDiv() {
        $('#changeDiv').fadeOut(500);
        setTimeout(function () {
            $('#changeDiv').empty();
        }, 500)
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