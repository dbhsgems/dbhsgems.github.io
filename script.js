let starPresent = false; // Variable to track if a star is present

document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener("click", function(event) {
    if (!starPresent) { // Check if a star is already present
      const star = document.createElement("div");
      star.classList.add("star");
      const starSize = 50; // Adjust the size of the star element if needed
      star.style.left = `${event.clientX - starSize - 85}px`; // Set left position at cursor X coordinate
      star.style.top = `${event.clientY - starSize - 63}px`; // Set top position at cursor Y coordinate
      star.style.zIndex = "9999"; 
      document.body.appendChild(star);

      const img = document.createElement("img");
      img.src = "star.png";
      img.alt = "Star Image";
      star.appendChild(img);

      starPresent = true; // Set flag to indicate the star is present

      // Reset the flag after 1 second to allow the appearance of another star
      setTimeout(() => {
        starPresent = false;
      }, 400);

      // Remove the star after animation completes
      setTimeout(() => {
        star.style.opacity = 0; // Fading out the star
        setTimeout(() => {
          star.remove();
        }, 300); // Wait for the animation duration before removing the star
      }, 1000); // Adjust timing to match the animation duration
    }
  });
});
