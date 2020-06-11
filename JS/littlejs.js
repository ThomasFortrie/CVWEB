$(document).ready(function () {

    arraySizes = setSizes();
    
    window.onresize = function () {
        arraySizes = setSizes();
    }






    // applique les nouvelles tailles à la div principales
    function setSizes() {
        var height = $(window).height();
        var width = $(window).width();
        console.log(height + " " + width)
        $(document).css({
            "height" : height,
            "width" : width
        })
        $('#body').css({
            "height" : height,
            "width" : width
        })
    }

    


})