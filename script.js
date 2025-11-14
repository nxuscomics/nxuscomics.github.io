// Este script maneja la funcionalidad del menú desplegable.

// --- 1. LÓGICA DEL MENÚ DESPLEGABLE (Seleccionar Serie/Autor) ---

// Selecciona el botón y el contenido del desplegable
const selectorButton = document.querySelector('.selector-button');
const dropdownContent = document.querySelector('.dropdown-content');

// Evento para alternar la visibilidad del menú al hacer clic en el botón
if (selectorButton && dropdownContent) {
    selectorButton.addEventListener('click', (e) => {
        e.preventDefault(); // Evita cualquier acción por defecto del botón
        dropdownContent.classList.toggle('show');
    });
}


// Cierra el menú si se hace clic fuera de él
window.addEventListener('click', (event) => {
    // Si el clic no es en el botón ni dentro del contenido del desplegable
    if (!event.target.closest('.comic-selector')) {
        // Comprueba si el desplegable está abierto
        if (dropdownContent && dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});

// NOTA IMPORTANTE:
// El clic en los paneles de cómic (la imagen) te lleva directamente a la página individual
// porque eliminamos el código que detenía la navegación (e.preventDefault()).