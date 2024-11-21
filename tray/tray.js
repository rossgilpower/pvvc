// tray.js

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const trayId = urlParams.get('id');

    // Simulación de datos de charolas (puedes reemplazar esto con una llamada a la API)
    const trays = {
        1: {
            id: 1,
            name: 'Charola 1',
            status: 'En mantenimiento',
            storekeeper: 'Juan Pérez',
            instrumentalist: 'María López',
            items: ['Bisturí', 'Tijeras', 'Pinzas']
        },
        2: {
            id: 2,
            name: 'Charola 2',
            status: 'En limpieza',
            storekeeper: 'Ana García',
            instrumentalist: 'Carlos Martínez',
            items: ['Estetoscopio', 'Termómetro', 'Esfigmomanómetro']
        },
        3: {
            id: 3,
            name: 'Charola 3',
            status: 'Disponible',
            storekeeper: 'Luis Fernández',
            instrumentalist: 'Laura Sánchez',
            items: ['Pinzas', 'Gasas', 'Jeringas']
        },
        4: {
            id: 4,
            name: 'Charola 4',
            status: 'En uso',
            storekeeper: 'Pedro Gómez',
            instrumentalist: 'Elena Rodríguez',
            items: ['Guantes', 'Mascarillas', 'Desinfectante']
        },
        5: {
            id: 5,
            name: 'Charola 5',
            status: 'En uso',
            storekeeper: 'Pedro Gómez',
            instrumentalist: 'Elena Rodríguez',
            items: ['Guantes', 'Mascarillas', 'Desinfectante']
        }
    };

    const tray = trays[trayId];

    if (tray) {
        document.getElementById('tray-id').textContent = tray.id;
        document.getElementById('tray-name').textContent = tray.name;
        document.getElementById('tray-status').textContent = tray.status;
        document.getElementById('tray-status').classList.add(
            tray.status.toLowerCase().replace(' ', '-')
        );
        document.getElementById('tray-storekeeper').textContent = tray.storekeeper;
        document.getElementById('tray-instrumentalist').textContent = tray.instrumentalist;
        const trayItems = document.getElementById('tray-items');
        tray.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            trayItems.appendChild(li);
        });
    }

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

    document.getElementById('modify-tray-btn').addEventListener('click', function() {
        openModal(`
            <h2>Modificar Charola</h2>
            <form id="modify-tray-form">
                <div class="form-group">
                    <label for="tray-name">Nombre de la Charola:</label>
                    <input type="text" id="tray-name" name="tray-name" value="${tray.name}" required>
                </div>
                <div class="form-group">
                    <label for="tray-status">Estado:</label>
                    <input type="text" id="tray-status" name="tray-status" value="${tray.status}" required>
                </div>
                <div class="form-group">
                    <label for="tray-storekeeper">Almacenista:</label>
                    <input type="text" id="tray-storekeeper" name="tray-storekeeper" value="${tray.storekeeper}" required>
                </div>
                <div class="form-group">
                    <label for="tray-instrumentalist">Instrumentista:</label>
                    <input type="text" id="tray-instrumentalist" name="tray-instrumentalist" value="${tray.instrumentalist}" required>
                </div>
                <div class="form-group">
                    <label for="tray-items">Items:</label>
                    <textarea id="tray-items" name="tray-items" required>${tray.items.join(', ')}</textarea>
                </div>
                <div class="form-actions">
                    <button type="submit">Aceptar</button>
                    <button type="button" onclick="closeModal()">Cancelar</button>
                </div>
            </form>
        `);
    });

    document.getElementById('delete-tray-btn').addEventListener('click', function() {
        if (confirm('¿Estás seguro de que deseas eliminar esta charola?')) {
            // Lógica para eliminar la charola (puedes reemplazar esto con una llamada a la API)
            alert('Charola eliminada');
            window.location.href = '../home/home.html';
        }
    });
});