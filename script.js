// Book Courier

document.getElementById("courierForm").addEventListener("submit", function (event) {

    event.preventDefault();

    let sender = document.getElementById("sender").value;
    let receiver = document.getElementById("receiver").value;
    let weight = document.getElementById("weight").value;

    // Generate Tracking ID
    let trackingId = "CR" + Math.floor(100000 + Math.random() * 900000);

    document.getElementById("bookingMessage").innerHTML =
        "Courier booked successfully!<br>" +
        "Sender: " + sender + "<br>" +
        "Receiver: " + receiver + "<br>" +
        "Weight: " + weight + " kg<br>" +
        "<b>Tracking ID: " + trackingId + "</b>";

    // Save tracking ID
    localStorage.setItem("trackingId", trackingId);

    this.reset();
});


// Track Courier

function trackCourier() {

    let enteredId = document.getElementById("trackingId").value;
    let savedId = localStorage.getItem("trackingId");

    if (enteredId === savedId) {

        document.getElementById("trackingResult").innerHTML =
            "<b>Tracking ID:</b> " + enteredId +
            "<br><b>Status:</b> Courier In Transit 🚚" +
            "<br><b>Expected Delivery:</b> 2-3 Days";

    } else {

        document.getElementById("trackingResult").innerHTML =
            "❌ Tracking ID not found.";
    }
}


// Book Now Button

function showBooking() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}