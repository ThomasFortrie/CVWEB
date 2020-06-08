$(document).ready(function () {

    arraySizes = setSizes();
    
    window.onresize = function () {
        arraySizes = setSizes();
    }






    // applique les nouvelles tailles à la div principales
    function setSizes() {
        var height = $(document).height();
        var width = $(document).width();
        $(document).css({
            "height" : height,
            "width" : width
        })
        $(body).css({
            "height" : height,
            "width" : width
        })
    }

    


})