// Get references to the button and modal
var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("myModal");

// When the button is clicked, display the modal
openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
