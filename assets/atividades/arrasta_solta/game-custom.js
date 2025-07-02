// Definição dos containers
var containers = [
  document.querySelector("#cardPile"),
  document.querySelector("#slot-1"),
  document.querySelector('#slot-2'),
  document.querySelector('#slot-3'),
  document.querySelector('#slot-4'),
  document.querySelector('#slot-5'),
  document.querySelector('#slot-6'),
  document.querySelector('#slot-7'),
  document.querySelector('#slot-8'),
  document.querySelector('#slot-9'),
  document.querySelector('#slot-10'),
  document.querySelector('#slot-11')
];

var audio = new Audio();
var erro = 0;
var scrollable = true;

// Função para checar a quantidade de cards dentro do slot
function checkSlot(slot) {
  const cardCount = slot.querySelectorAll('.card').length;

  if (cardCount >= 3) {
    slot.classList.add('full');
  } else {
    slot.classList.remove('full');
  }
}

// Impede o scroll durante drag no mobile
var listener = function (e) {
  if (!scrollable) {
    e.preventDefault();
  }
}
document.addEventListener('touchmove', listener, { passive: false });

// Configura Dragula
dragula({
  containers: containers,
  revertOnSpill: true,
  direction: 'vertical',
  accepts: function (el, target, source, sibling) {
    return el.dataset.target == target.id;
  }
})
  .on('drag', function (el, source) {
    scrollable = false;
  })
  .on("drop", function (el, target, source, sibling) {
    scrollable = true;

    $('#bgmodal-acerto').modal('show');
    audio.setAttribute('src', '../../assets/atividades/arrasta_solta/acerto.mp3');
    audio.load();
    audio.play();

    // Após o drop, checa o slot onde o card foi solto
    setTimeout(() => {
      if (target.classList.contains('slot')) {
        checkSlot(target);
      }
    }, 50);
  })
  .on("cancel", function () {
    scrollable = true;

    $('#bgmodal-erro').modal('show');
    audio.setAttribute('src', '../../assets/atividades/arrasta_solta/erro.mp3');
    audio.load();
    audio.play();
  });

