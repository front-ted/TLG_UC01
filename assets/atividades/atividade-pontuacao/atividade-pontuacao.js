function quiz() {
    var counter = 0;


    //contador img1
    $(".ckbox-counter").click(function () {
        var clicks = $(this).data('clicks');
        if (clicks) {
            counter--;
            $(this).parents('label').removeClass('marcado');
            //$(".opc01").attr("src","img/quiz/opc01.png");
        } else {
            $(this).parents('label').addClass('marcado');
            //$(".opc01").attr("src","img/quiz/opc01x.png");
            counter++;
        }
        $(this).data("clicks", !clicks);
    });

    $(".resulto").click(function () {
        if (counter == 0) {
            $(".mostrar-resultado").css("display", "none");
            $(".mostrar-resultado").html("<p>Marque no mínimo uma característica de seu perfil profissional.</p>");
            $(".mostrar-resultado").fadeIn();
        } else if (counter == 1 || counter <= 5) {
            $(".mostrar-resultado").css("display", "none");
            $(".mostrar-resultado").html("<p class='caixa-destaque'><span class='nota'>" + counter +
                "/15</span></p> <p>Você está no caminho certo! No entanto, é necessário que você identifique as habilidades que precisa trabalhar para melhor desenvolvê-las.</p>"
            );
            $(".mostrar-resultado").fadeIn();

        } else if (counter == 6 || counter <= 10) {
            $(".mostrar-resultado").css("display", "none");
            $(".mostrar-resultado").html("<p class='caixa-destaque'><span class='nota'>" + counter +
                "/15</span></p> <p>Seu teste indica que você pode se tornar um bom profissional de RH. Entretanto, é necessário que você identifique as habilidades que precisa trabalhar para melhor desenvolvê-las.</p>"
            );
            $(".mostrar-resultado").fadeIn();
        } else if (counter == 11 || counter <= 15) {
            $(".mostrar-resultado").css("display", "none");
            $(".mostrar-resultado").html("<p class='caixa-destaque'><span class='nota'>" + counter +
                "/15</span></p> <p>Parabéns, seu teste indica que você tem as características necessárias para se tornar um profissional de RH de sucesso. Entretanto, é necessário que você identifique as habilidades que precisa trabalhar para melhor desenvolvê-las.</p>"
            );
            $(".mostrar-resultado").fadeIn();
        }

    });
}

quiz();

$(function () {
    var checkboxes = document.getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
            checkboxes[i].checked = false;
        }
    }
});