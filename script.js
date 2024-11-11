// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Aquí puedes añadir la lógica de validación de usuario y contraseña
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulación de validación (puedes reemplazar esto con una validación real)
        if (username === 'admin' && password === 'admin') {
            // Redirige a la página de inicio
            window.location.href = 'home.html';
        } else {
            // Muestra un mensaje de error
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Usuario o contraseña incorrectos';
        }
    });
});
