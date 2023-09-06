function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);

    if (isNaN(income)) {
        alert('Please enter a valid income.');
        return;
    }

    let tax = 0;

    if (income <= 9875) {
        tax = income * 0.1;
    } else if (income <= 40125) {
        tax = 9875 * 0.1 + (income - 9875) * 0.12;
    } else if (income <= 85525) {
        tax = 9875 * 0.1 + (40125 - 9875) * 0.12 + (income - 40125) * 0.22;
    } else {
        tax = 9875 * 0.1 + (40125 - 9875) * 0.12 + (85525 - 40125) * 0.22 + (income - 85525) * 0.24;
    }

    document.getElementById('result').innerHTML = `Your federal income tax is: $${tax.toFixed(2)}`;
}
