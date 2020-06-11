$(document).ready(function () {

    setSizes();

    window.onresize = function () {
        setSizes();
    }


    $('#photoProfil').hover(function(e){



    })


    $(document.body).on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        if (event.target.classList.contains("thomas")){
            console.log("test tom");
        }
        if (event.target.classList.contains("thomas")){
            
        }
        if (event.target.classList.contains("thomas")){
            
        }
        if (event.target.classList.contains("thomas")){
            
        }





    })


















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