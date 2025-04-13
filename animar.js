const menuDIV = document.getElementById('menu-mobile');
const btnAnimar = document.getElementById('btn-menu-mobile');

menuDIV.addEventListener('click', animarMenu);

function animarMenu() {
    menuDIV.classList.toggle('abrir');
    btnAnimar.classList.toggle('ativo');
} 

