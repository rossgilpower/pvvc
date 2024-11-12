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
            window.location.href = '../home/home.html';
        } else {
            // Muestra un mensaje de error
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Usuario o contraseña incorrectos';
        }
    });

    // Modal handling
    const modal = document.getElementById('popup-form');
    const span = document.getElementsByClassName('close')[0];

    function openModal(content) {
        document.getElementById('popup-form-content').innerHTML = content;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    span.onclick = function() {
        closeModal();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    document.getElementById('add-tray').addEventListener('click', function() {
        openModal(`
            <h2>Agregar Charola</h2>
            <label for="tray-name">Nombre de la Charola:</label>
            <input type="text" id="tray-name" name="tray-name" required>
            <label for="tray-items">Items:</label>
            <textarea id="tray-items" name="tray-items" required></textarea>
            <button type="submit">Aceptar</button>
            <button type="button" onclick="closeModal()">Cancelar</button>
        `);
    });

    document.getElementById('modify-tray').addEventListener('click', function() {
        openModal(`
            <h2>Modificar Charola</h2>
            <label for="tray-id">ID de la Charola:</label>
            <input type="text" id="tray-id" name="tray-id" required>
            <label for="tray-name">Nombre de la Charola:</label>
            <input type="text" id="tray-name" name="tray-name">
            <label for="tray-items">Items:</label>
            <textarea id="tray-items" name="tray-items"></textarea>
            <button type="submit">Aceptar</button>
            <button type="button" onclick="closeModal()">Cancelar</button>
        `);
    });

    document.getElementById('consult-tray').addEventListener('click', function() {
        openModal(`
            <h2>Consultar Charola</h2>
            <label for="tray-id">ID de la Charola:</label>
            <input type="text" id="tray-id" name="tray-id" required>
            <button type="submit">Consultar</button>
            <button type="button" onclick="closeModal()">Cancelar</button>
        `);
    });
});
