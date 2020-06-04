$(document).ready(function(){

    $('#menu_icon').on('click',function(e){
        e.stopPropagation();
        e.preventDefault();
        $('#menu').animate({right: '200px'});
    })

    $('#body').on('click', function(){
        $('#menu').animate({right: '-200px'});
    })



})