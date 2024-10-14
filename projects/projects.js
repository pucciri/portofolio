document.addEventListener("DOMContentLoaded", function() {
    const projectImages = document.querySelectorAll(".project-img");
    const modalImage = document.getElementById("modalImage");
  
    projectImages.forEach((img) => {
      img.addEventListener("click", function() {
        modalImage.src = this.dataset.imgSrc;  // Set the modal image source to the clicked image source
        $('#projectModal').modal('show');  // Show the Bootstrap modal
      });
    });
  
    // Back button functionality
    document.getElementById("backButton").addEventListener("click", function() {
        window.history.back();  // Navigate to the previous page
    });
  });
  