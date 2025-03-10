// script.js

let intervalId = null;

function startBuzz() {
    if (!("vibrate" in navigator)) {
        alert("Vibration API not supported on this device/browser.");
        return;
    }

    // Prevent multiple intervals if already running
    if (intervalId !== null) {
        return;
    }

    intervalId = setInterval(() => {
        // Vibrate for 200ms every second
        navigator.vibrate(200);
        console.log("Device vibrated for a tick.");
    }, 1000);
}

function stopBuzz() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        console.log("Vibration stopped.");
    }
}