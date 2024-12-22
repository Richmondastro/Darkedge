// Snowflake generation logic
const snowContainer = document.getElementById('snow-container');

// Set a limit on how many snowflakes are visible at once
const maxSnowflakes = 10; // Visible snowflakes at a time
let currentSnowflakes = 0;

function createSnowflake() {
  if (currentSnowflakes >= maxSnowflakes) {
    return; // Stop creating new snowflakes once the limit is reached
  }

  const snowflake = document.createElement('div');
  snowflake.classList.add('snow');
  snowflake.style.left = Math.random() * 100 + 'vw'; // Random position between 0-100% of viewport width
  snowflake.style.animationDuration = Math.random() * 10 + 5 + 's'; // Random fall speed between 5-15s
  snowflake.style.animationDelay = Math.random() * 5 + 's'; // Random delay between 0-5s
  snowContainer.appendChild(snowflake);
  
  currentSnowflakes++;

  // Remove snowflake after it falls
  setTimeout(() => {
    snowContainer.removeChild(snowflake);
    currentSnowflakes--; // Decrease the count of current snowflakes
  }, 10000); // Matches the duration of the fall animation
}

// Generate snowflakes with a longer interval
setInterval(createSnowflake, 500); // Create a snowflake every 500ms instead of 100ms

// Simple connection button functionality
const connectButton = document.getElementById('connectButton');
const message = document.getElementById('message');

connectButton.addEventListener('click', () => {
  message.style.display = 'block'; // Display the "connected" message
});
