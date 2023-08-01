document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery img");
    const modal = document.querySelector(".modal");
    const modalContent = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close");
  
    galleryImages.forEach((image) => {
      image.addEventListener("click", () => {
        modal.style.display = "flex";
        modalContent.src = image.src;
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  