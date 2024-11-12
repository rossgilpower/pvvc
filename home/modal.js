// modal.js

document.addEventListener('DOMContentLoaded', function() {
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

    // Export functions to be used in other scripts
    window.openModal = openModal;
    window.closeModal = closeModal;
});