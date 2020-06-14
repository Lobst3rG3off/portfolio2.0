// scroll menu
$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
      $('nav').addClass('fixed-header');
      $('nav div').addClass('visible-title');
  }
  else {
      $('nav').removeClass('fixed-header');
      $('nav div').removeClass('visible-title');
  }
});
// project viewer

const cardButtons = document.querySelectorAll('.project');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonCLick(event) {
  console.log('clicked');
    const button = event.currentTarget;
    const card = button.closest('.project');
    //  grab the image source
    const imgSrc = card.querySelector('img').src;
    const desc = card.querySelector('figcaption').textContent;
    const name = card.querySelector('h3').textContent;
    //  populate the modal with the new info
    modalInner.innerHTML = `
<img width="600" height="600" src="${imgSrc.replace(
        '200',
        '600'
    )}" alt="${name}">
<p>${desc}</p>
`;
    // show the modal
    modalOuter.classList.add('open');
}

cardButtons.forEach(button =>
    button.addEventListener('click', handleCardButtonCLick)
);

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (event) {
    const isOutside = !event.target.closest('.modal-inner');
    console.log(isOutside);
    if (isOutside) {
        closeModal();
    }
});

window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeModal();
    }
});



