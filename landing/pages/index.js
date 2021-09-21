const sidebarBtn = document.querySelector(".sidebar__icon");
let sideBar = document.querySelector(".sidebar");
sidebarBtn.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar-show");
  sidebarBtn.children[0].classList.toggle("sidebar__hr_rotateR");
  sidebarBtn.children[1].classList.toggle("sidebar__hr_invisible");
  sidebarBtn.children[2].classList.toggle("sidebar__hr_rotateL");
  for (let i=0; i < sidebarBtn.children; i++) {
      sidebarBtn.children[i].classList.togle("sidebar__hr_color");
  }
})

const donateBtn = document.querySelectorAll(".donate-popup");
let popup = document.querySelector('.popup');
let popupCloseIcon = document.querySelector(".close-popup")
donateBtn.forEach(item => {
    item.addEventListener("click", () => {
        PopupOpen(popup);
    })
})

popupCloseIcon.addEventListener("click", () => {
  PopupClose(popupCloseIcon.closest('.popup'));
})
function PopupOpen(popup) {
  popup.classList.add("popup-open");
  popup.addEventListener("click", (event) => {
    if(!event.target.closest('.popup__content')) {
      PopupClose(event.target.closest('.popup'))
    }
  })
}
function PopupClose(popup) {
  popup.classList.remove("popup-open");
}

function caruselPet() {
  const slider = document.querySelector('.slider');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  const items = slider.querySelectorAll('a');
  const width = items[0].offsetWidth;
  const gap = 40;
  prev.style.display = 'none';

  next.addEventListener("click", e => {
    slider.scrollBy(width + gap, 0);
    prev.style.display = 'block';
    if (slider.scrollLeft >= slider.scrollWidth - (width * 4 + gap * 3)) {
      next.style.display = 'none';
    }
  });

  prev.addEventListener("click", e => {
    slider.scrollBy(-(width + gap), 0);
    next.style.display = 'block';
    if (slider.scrollLeft <= width + gap) {
      prev.style.display = 'none';
    }
  });
}

caruselPet();

function autoCaruselComments () {
  const slider = document.querySelector('.slider-comments');
  const next = document.querySelector('.next-comments');
  const prev = document.querySelector('.prev-comments');
  const items = slider.querySelectorAll('.reviews__item');
  const width = items[0].offsetWidth;
  const gap = 30;

  slider.scrollBy(width + gap, 0);

  next.addEventListener("click", e => {
    slider.scrollBy(width + gap, 0);
    prev.style.display = 'block';
  });

  prev.addEventListener("click", e => {
    slider.scrollBy(-(width + gap), 0);
    next.style.display = 'block';
  });
  setTimeout(autoCaruselComments, 5000)
}

setTimeout(autoCaruselComments, 5000)