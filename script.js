// Get the modal and close button elements
const modalOverlay = document.getElementById('modalOverlay');
const modalBox = document.getElementById('modalBox');
const closeModalBtn = document.getElementById('closeModalBtn');
const openModalBtn = document.getElementById('openModalBtn');

// Function to open the modal
function openModal() {
  modalOverlay.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modalOverlay.style.display = 'none';
}

// Event listeners
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Close the modal if the user clicks outside of it
modalOverlay.addEventListener('click', function (event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

// Close the modal if the user presses the 'Esc' key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
