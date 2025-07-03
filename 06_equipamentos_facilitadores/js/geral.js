$(".btn-NR6").click(function(){
    $(".check-NR6").css("display","block");
});
$(".btn-NR9").click(function(){
    $(".check-NR9").css("display","block");
});
$(".btn-NR12").click(function(){
    $(".check-NR12").css("display","block");
});
$(".btn-NR18").click(function(){
    $(".check-NR18").css("display","block");
});


$(".btn-capacete").click(function(){
    $(this).addClass("visto");
});
$(".btn-oculos").click(function(){
    $(this).addClass("visto");
});
$(".btn-auditivo").click(function(){
    $(this).addClass("visto");
});
$(".btn-luvas").click(function(){
    $(this).addClass("visto");
});
$(".btn-roupa").click(function(){
    $(this).addClass("visto");
});
$(".btn-calcados").click(function(){
    $(this).addClass("visto");
});


$('.btn-barreiras').hover(
    function () {
        $('.circulo-barreiras').show();
    },
    function () {
        $('.circulo-barreiras').hide();
    }
);
$('.btn-ventilacao').hover(
    function () {
        $('.circulo-ventilacao').show();
    },
    function () {
        $('.circulo-ventilacao').hide();
    }
);
$('.btn-sinalizacao').hover(
    function () {
        $('.circulo-sinalizacao').show();
    },
    function () {
        $('.circulo-sinalizacao').hide();
    }
);
$('.btn-dispositivos').hover(
    function () {
        $('.circulo-dispositivos').show();
    },
    function () {
        $('.circulo-dispositivos').hide();
    }
);
$('.btn-alarme').hover(
    function () {
        $('.circulo-alarme').show();
    },
    function () {
        $('.circulo-alarme').hide();
    }
);


