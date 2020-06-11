$(document).ready(function () {

    setSizes();

    window.onresize = function () {
        setSizes();
    }






    // applique les nouvelles tailles à la div principales
    function setSizes() {
        var height = $(window).height();
        var width = $(window).width();
        console.log(height + " " + width)
        $('#realBody').css({
            "min-height" : height,
            "min-width" : width
        })
        $('#body').css({
            "height" : height,
            "width" : width
        })
    }

    


})