// inicio 
window.addEventListener('load', function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, { trigger: "manual" });
  });

  let activePopover = null;

  popoverTriggerList.forEach(function (popoverTriggerEl) {
    popoverTriggerEl.addEventListener("click", function (event) {
      event.stopPropagation(); // Impede o fechamento imediato

      var popoverInstance = bootstrap.Popover.getInstance(popoverTriggerEl);

      // Se houver um popover ativo e for diferente do atual, fecha-o antes de abrir o novo
      if (activePopover && activePopover !== popoverTriggerEl) {
        bootstrap.Popover.getInstance(activePopover)?.hide();
      }

      // Alterna o popover clicado
      if (popoverTriggerEl.getAttribute("aria-describedby")) {
        popoverInstance.hide();
        activePopover = null;
      } else {
        popoverInstance.show();
        activePopover = popoverTriggerEl;
      }
    });
  });

  // Fecha qualquer popover ao clicar fora
  document.addEventListener("click", function () {
    if (activePopover) {
      bootstrap.Popover.getInstance(activePopover)?.hide();
      activePopover = null;
    }
  });

  // Fecha todos os popovers ao fechar o modal
  document.querySelector('.modal')?.addEventListener("hidden.bs.modal", function () {
    popoverList.forEach(function (popover) {
      popover.hide();
    });
    activePopover = null;
  });

  $('.preloader').fadeOut(300);

  $('.check').click(function () {
    $(this).addClass('visitado');
  });
});
// fim

// reposicionamento do botao do menu

$(window).scroll(function () {

  var topPos = $(this).scrollTop();

  // if user scrolls down..
  if (topPos > 100) {
    $('.bt-hamburguer').css("top", "20px");
    $('.bt-fecharmenu').css("top", "20px");
  } else {
    $('.bt-hamburguer').css("top", "150px");
    $('.bt-fecharmenu').css("top", "150px");
  }

}); // scroll END


// MODO ESCURO
$(window).scroll(function () {

  var topPos = $(this).scrollTop();

  // if user scrolls down..
  if (topPos > 0) {
    $('body').removeClass("top60");
    $('body').addClass("top00");
    $('.bt-hamburguer').css("top", "20px");
    $('.bt-fecharmenu').css("top", "20px");
  } else {
    $('body').removeClass("top00");
    $('body').addClass("top60");
    $('.bt-hamburguer').css("top", "150px");
    $('.bt-fecharmenu').css("top", "150px");
  }

});
var isDarkMode = true; // Controla o modo atual (escuro/claro)

function toggleBackgroundImage() {
  var button = document.getElementById('toggleButton');
  isDarkMode = !isDarkMode; // Alternar entre escuro e claro

  if (isDarkMode) {
    button.style.backgroundImage = "url('../assets/images/modo_escuro.svg')";
  } else {
    button.style.backgroundImage = "url('../assets/images/modo_claro.svg')";
  }
}

$(".btn-tema_pagina").click(function () {
  console.log($(".btn-tema_pagina"))
  if ($("body").hasClass('bg-claro')) {
    $("body").removeClass('bg-claro')
    $("body").addClass("bg-escuro");
  } else if ($("body").hasClass('bg-escuro')) {
    $("body").removeClass('bg-escuro')
    $("body").addClass("bg-claro")
  }
});

// MODO ESCURO

// caixas expansiveis
$('.caixa-container button.btpluscaixa').click(function () {
  let caixa = $(this).prev()
  if (caixa.hasClass('aberta')) {
    caixa.removeClass('aberta')
    $(this).css('background-image', 'url("../assets/images/bt_mais.svg")')
  } else {
    caixa.addClass('aberta')
    $(this).css('background-image', 'url("../assets/images/bt_menos.svg")')
  }
})

// parar o video ao fechar modal

document.addEventListener('DOMContentLoaded', function () {
  var modals = document.querySelectorAll('.modal');

  modals.forEach(function (modal) {
    modal.addEventListener('hidden.bs.modal', function () {
      var iframes = modal.querySelectorAll('iframe');
      iframes.forEach(function (iframe) {
        var src = iframe.getAttribute('src');
        iframe.setAttribute('src', '');
        iframe.setAttribute('src', src);
      });
    });
  });
});


