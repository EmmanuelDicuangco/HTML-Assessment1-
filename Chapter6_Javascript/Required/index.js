function calculateTotal() {

    let price = parseFloat(document.getElementById("price").value);
    let liters = parseFloat(document.getElementById("liters").value);

    let total = price * liters;

    document.getElementById("result").textContent =
        "Total Cost: £" + total.toFixed(2);
}