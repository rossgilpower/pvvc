// script.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validación básica
    if (username === "admin" && password === "password123") {
        alert('¡Inicio de sesión exitoso!');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
    }
});
