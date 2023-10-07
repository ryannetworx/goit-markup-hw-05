// modal.js

// Get references to the button and modal
var openModalButton = document.getElementById("openModalBtn");
var closeModalButton = document.getElementById("closeModalBtn");
var modal = document.getElementById("myModal");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Attach click event listeners to the open and close buttons
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

// Close the modal if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        closeModal();
    }
});
