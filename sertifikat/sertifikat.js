document.addEventListener("DOMContentLoaded", function() {
  const certificates = document.querySelectorAll(".certificate img");
  const modalImage = document.getElementById("modalImage");

  certificates.forEach((img) => {
      img.addEventListener("click", function() {
          modalImage.src = this.src;  // Set the modal image source to the clicked image source
          $('#certificateModal').modal('show');  // Show the Bootstrap modal
      });
  });

  // Back button functionality
  document.getElementById("backButton").addEventListener("click", function() {
      window.history.back();  // Navigate to the previous page
  });
});
