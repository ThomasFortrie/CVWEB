$(document).ready(function () {

    arraySizes = getSizes();

    window.onresize = function () {
      arraySizes = getSizes();
    }






    // applique les nouvelles tailles à la div principales
    function setSizes() {
        var height = arraySizes["1"];
        var width = arraySizes["2"];
        $(document).css({
            "height" : height,
            "width" : width
        })
        $(body).css({
            "height" : height,
            "width" : width
        })
    }

    // Récupère les valeurs tailles de la fenêtre
    function getSizes() {

        var theHeight = $(document).height();
        var theWidth = $(document).width();
        var array = {};
        array = {
            "1" : theHeight,
                "2" : theWidth
        };
    }


})