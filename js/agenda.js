document.addEventListener("DOMContentLoaded", () => {
    const events = document.querySelectorAll(".event-item"); // Change class name to match the new structure
  
    function getCurrentTime() {
        const now = new Date();
        return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    }
  
    function isLive(startTime, endTime, currentTime) {
        const [startH, startM] = startTime.split(":").map(Number);
        const [endH, endM] = endTime.split(":").map(Number);
        const [currentH, currentM] = currentTime.split(":").map(Number);
  
        const start = startH * 60 + startM;
        const end = endH * 60 + endM;
        const current = currentH * 60 + currentM;
  
        return current >= start && current <= end;
    }
  
    function updateEventStatus() {
        const currentTime = getCurrentTime();
        events.forEach((event) => {
            const startTime = event.dataset.start;
            const endTime = event.dataset.end;
  
            if (isLive(startTime, endTime, currentTime)) {
                event.querySelector(".event-description").classList.add("live"); // Updated class name
            } else {
                event.querySelector(".event-description").classList.remove("live"); // Updated class name
            }
        });
    }
  
    // Initial check and repeated updates
    updateEventStatus();
    setInterval(updateEventStatus, 1000); // Check every second
});
