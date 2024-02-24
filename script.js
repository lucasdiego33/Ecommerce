const cabecalho = document.querySelector(".cabecalho");
const menuButton = document.querySelector(".menu-button");
const ver_menu = document.querySelector(".ver_menu");


menuButton.addEventListener("click", () => {
  //cabecalho.classList.toggle("show-menu");
  cabecalho.style.display = 'none';
  ver_menu.style.display = 'flex';
});


  
ver_menu.addEventListener('click', function(){
  cabecalho.style.display = 'block';
  ver_menu.style.display = 'none';
});



