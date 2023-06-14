
const imagenUsuario = document.querySelector('.imagenusuario');
const overlay = document.querySelector('.overlay');

imagenUsuario.addEventListener('mouseover', function() {
    overlay.style.opacity = '1';
});

imagenUsuario.addEventListener('mouseout', function() {
    overlay.style.opacity = '0';
});
