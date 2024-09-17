// Obtener los elementos del DOM para el Modal
const modal = document.getElementById('modal');
const btnOpenModal = document.getElementById('openModal');
const spanCloseModal = document.getElementById('closeModal');

// Cuando el usuario hace clic en el botón, se abre el modal
btnOpenModal.onclick = function() {
    modal.style.display = 'block';
}

// Cuando el usuario hace clic en la (x), se cierra el modal
spanCloseModal.onclick = function() {
    modal.style.display = 'none';
}

// Cuando el usuario hace clic en cualquier parte fuera del modal, se cierra el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
