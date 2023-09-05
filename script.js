
// Get input elements
const salaryInput = document.getElementById("salary");
const exemptionInput = document.getElementById("exemption");
const deductionInput = document.getElementById("deduction");
const borrowedCapitalInput = document.getElementById("borrowedCapital");
const unrealizedRentInput = document.getElementById("unrealizedRent");
const municipalTaxesInput = document.getElementById("municipalTaxes");
const totalIncomeDisplay = document.getElementById("totalIncome");
const interestOnCapitalDisplay = document.getElementById("interestOnCapital");
const totalDisplay = document.getElementById("total");

// Function to calculate and display total income
function calculateTotalIncome() {
    const salary = parseFloat(salaryInput.value) || 0;
    const exemption = parseFloat(exemptionInput.value) || 0;
    const deduction = parseFloat(deductionInput.value) || 0;
    const borrowedCapital = parseFloat(borrowedCapitalInput.value) || 0;
    const unrealizedRent = parseFloat(unrealizedRentInput.value) || 0;
    const municipalTaxes = parseFloat(municipalTaxesInput.value) || 0;

    const totalIncome = salary - exemption - deduction;
    const interestOnCapital = (borrowedCapital > 200000) ? (borrowedCapital * 0.20) : ((borrowedCapital > 100000) ? (borrowedCapital * 0.12) : 0);
    const total = totalIncome + interestOnCapital + unrealizedRent - municipalTaxes;

    totalIncomeDisplay.textContent = totalIncome.toFixed(2);
    interestOnCapitalDisplay.textContent = interestOnCapital.toFixed(2);
    totalDisplay.textContent = total.toFixed(2);
}

// Add event listeners to input fields
salaryInput.addEventListener("input", calculateTotalIncome);
exemptionInput.addEventListener("input", calculateTotalIncome);
deductionInput.addEventListener("input", calculateTotalIncome);
borrowedCapitalInput.addEventListener("input", calculateTotalIncome);
unrealizedRentInput.addEventListener("input", calculateTotalIncome);
municipalTaxesInput.addEventListener("input", calculateTotalIncome);