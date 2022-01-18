$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.boton-arriba').slideDown(300);    
        } else {
            $('.boton-arriba').slideUp(300);
        }
    });
    $('.boton-arriba').on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});