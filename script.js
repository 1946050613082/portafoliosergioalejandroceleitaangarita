// script.js
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace se abra
        alert(`Has seleccionado la categoría: ${this.querySelector('h3').textContent}`);
    });
});