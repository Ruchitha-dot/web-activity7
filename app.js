
// Selecting HTML elements
const match = document.getElementById("match");
const stand = document.getElementById("stand");
const quantity = document.getElementById("quantity");

const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryQuantity = document.getElementById("summaryQuantity");
const totalPrice = document.getElementById("totalPrice");

const bookingForm = document.getElementById("bookingForm");
const toast = document.getElementById("toast");

// Ticket prices
const prices = {
    General: 500,
    Premium: 1000,
    VIP: 2000
};

// Toast notification
let toastTimer;

function showToast(message) {
    toast.textContent = message;

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function() {
        toast.textContent = "";
    }, 2000);
}

// Update booking summary
function updateSummary() {

    const selectedMatch = match.value;
    const selectedStand = stand.value;
    const ticketCount = Number(quantity.value);

    if (!Number.isInteger(ticketCount) ||
        ticketCount < 1 || ticketCount > 10) {
        showToast("Enter quantity between 1 and 10!");
        return;
    }

    summaryMatch.textContent =
        selectedMatch || "Not Selected";

    summaryStand.textContent =
        selectedStand || "Not Selected";

    summaryQuantity.textContent = ticketCount;

    const price = prices[selectedStand] || 0;
    const total = price * ticketCount;

    totalPrice.textContent = total;

    showToast("Booking Summary Updated!");
}

// Change event listeners
match.addEventListener("change", updateSummary);

stand.addEventListener("change", updateSummary);

quantity.addEventListener("change", updateSummary);

// Confirm booking
bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!match.value || !stand.value) {
        showToast("Please select match and stand!");
        return;
    }

    if (!Number.isInteger(Number(quantity.value)) ||
        Number(quantity.value) < 1 ||
        Number(quantity.value) > 10) {
        showToast("Enter quantity between 1 and 10!");
        return;
    }

    updateSummary();
    showToast("Booking Confirmed Successfully!");

});
