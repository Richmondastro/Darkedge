// Countdown Date
var countDownDate = new Date("Jan 25, 2025 08:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  updateFlip(".days", padWithZero(days));
  updateFlip(".hours", padWithZero(hours));
  updateFlip(".minutes", padWithZero(minutes));
  updateFlip(".seconds", padWithZero(seconds));

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown-wrapper").innerHTML =
      "<span class='register-text bg-info'>Final Round Happening Now</span>";
  }
}, 1000);

function updateFlip(selector, value) {
  const flipCard = document.querySelector(selector);
  const top = flipCard.querySelector(".top");
  const bottom = flipCard.querySelector(".bottom");

  if (top.innerText != value) {
    top.innerText = value;
    bottom.innerText = value;

    flipCard.classList.remove("animate");
    void flipCard.offsetWidth; // Trigger reflow
    flipCard.classList.add("animate");
  }
}

// Helper function to add leading zeros
function padWithZero(value) {
  return value < 10 ? "0" + value : value;
}
