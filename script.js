// Selecciona todos los elementos con la clase .grid-item
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function(event) {
        // Evita que el enlace se abra
        event.preventDefault();

        // Verifica si el elemento h3 existe
        const titulo = this.querySelector('h3');
        if (titulo) {
            const categoria = titulo.textContent;
            alert(`Has seleccionado la categoría: ${categoria}`);
        } else {
            console.error("No se encontró el título (h3) en el elemento clickeado.");
        }
    });
});

// Función debounce para optimizar el evento resize
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Función que se ejecuta al redimensionar la ventana
function handleResize() {
    if (window.innerWidth < 768) {
        console.log("Modo móvil activado");
        // Aquí puedes agregar lógica específica para móviles
    } else {
        console.log("Modo escritorio activado");
        // Aquí puedes agregar lógica específica para escritorio
    }
}

// Escucha el evento de redimensionamiento con debounce
window.addEventListener("resize", debounce(handleResize, 200));

// Ejecuta handleResize al cargar la página
window.addEventListener("load", handleResize);