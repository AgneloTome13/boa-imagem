//Botão menu mobile
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
});

//Scroll da página para os links de menu e botão top
var link = $(".menu li a");
var subir = $(".btn-top");

$(window).scroll(function(){
    var posicaoatual = $(this).scrollTop();

    if(posicaoatual >= 350){
        subir.fadeIn();
    } else{
        subir.fadeOut();
    }
}); 

link.on("click", function(){
    var selector = $(this).attr("href");
    var posicao = $(selector).offset().top;
    $("html, body").animate({scrollTop: posicao-140}, 2000);
});

subir.on("click", function(){
    $("html, body").animate({scrollTop: 0}, 2000);
});

//Adicionar e remover classe active do menu
var add = $(".add");
add.on("click", function(){
    add.removeClass("active");
    $(this).addClass("active");
});