document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Validación básica
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert('Gracias por tu mensaje, ' + nombre + '. Te responderé pronto.');
        document.getElementById('contactForm').reset(); // Limpia el formulario
    } else {
        alert('Por favor, completa todos los campos.');
    }
});