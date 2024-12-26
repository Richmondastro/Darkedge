document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth; // Get the width of one slide
    const speed = 50; // Speed of the sliding animation (in milliseconds)
    const totalClones = 20; // Number of clones to create
  
    // Duplicate slides to create seamless loop (20 clones)
    const cloneSlides = () => {
      for (let i = 0; i < totalClones; i++) {
        slides.forEach(slide => {
          const clone = slide.cloneNode(true);
          slider.appendChild(clone); // Add the duplicate slide to the end
        });
      }
    };
  
    // Start the animation after duplicating slides
    const startSliderAnimation = () => {
      const totalSlides = slides.length + totalClones; // Total number of slides (original + cloned)
      const totalWidth = slideWidth * totalSlides; // Total width of all slides
      slider.style.width = totalWidth + 'px'; // Set the width of the slider
      slider.style.transition = 'transform 0s'; // Initially disable transition for smooth reset
  
      let currentPosition = 0;
      
      // Function to move the slider
      const moveSlider = () => {
        if (currentPosition <= -slideWidth * slides.length) {
          // Wait for 0.1 second before resetting the position
          setTimeout(() => {
            currentPosition = 0;
            slider.style.transition = 'transform 0s'; // Disable transition during reset
            slider.style.transform = `translateX(${currentPosition}px)`; // Instantly reset position
  
            // Allow the transition to re-enable after a small delay
            setTimeout(() => {
              slider.style.transition = `transform ${speed / 1000}s linear`; // Re-enable transition for the next cycle
            }, 10); // Small time to let the reset happen before transitioning again
          }, 100); // Delay of 0.1 second
        } else {
          currentPosition -= slideWidth; // Move the slider to the left by the width of one slide
          slider.style.transform = `translateX(${currentPosition}px)`;
        }
      };
  
      // Animate the slider continuously
      setInterval(moveSlider, speed);
    };
  
    // Initialize the slider
    cloneSlides(); // Duplicate the slides for continuous looping
    startSliderAnimation(); // Start the slider animation
  });
  