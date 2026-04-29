// Function to calculate petrol total
function calculateTotal() {

    // Get input values
    let price = parseFloat(document.getElementById("price").value);
    let liters = parseFloat(document.getElementById("liters").value);

    // Calculate total
    let total = price * liters;

    // Display result
    document.getElementById("result").textContent =
        "Total Cost: £" + total.toFixed(2);
}