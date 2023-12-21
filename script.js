const menuHamb = document.querySelector(".menu-hamburguer");

function abrirMenu() {
  const menu = document.querySelector(".nav");
  menu.classList.toggle("ativo");
}
abrirMenu();
menuHamb.addEventListener("click", abrirMenu);


function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-content");
  if (sections.length) {
    const heigth = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((item) => {
        const distanciaTop = item.getBoundingClientRect().top;
        const secaoVisivel = distanciaTop - heigth < 0;
        if (secaoVisivel) {
          item.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimaScroll();
