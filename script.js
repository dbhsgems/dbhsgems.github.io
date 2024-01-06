let starPresent = false; // Variable to track if a star is present

document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener("click", function(event) {
    if (!starPresent) { 
      const star = document.createElement("div");
      star.classList.add("star");
      star.classList.add("visible")
      const starSize = 50; 
      star.style.left = `${event.clientX - starSize - 85}px`; 
      star.style.top = `${event.clientY - starSize - 63}px`; 
      star.style.zIndex = "9999"; 
      document.body.appendChild(star);

      const img = document.createElement("img");
      img.src = "star.png";
      star.appendChild(img);

      starPresent = true; // Set flag to indicate the star is present

      // Reset the flag after 1 second to allow the appearance of another star
      setTimeout(() => {
        star.classList.remove('visible');
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
