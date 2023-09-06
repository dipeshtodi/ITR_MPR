
// Get input elements
const salaryInput = document.getElementById("salary");
const exemptionInput = document.getElementById("exemption");
const deductionInput = document.getElementById("deduction");
const businessInput = document.getElementById("business");
const otherBusinessInput = document.getElementById("otherBusiness");
const rentInput = document.getElementById("rent");
const unrealizedRentInput = document.getElementById("unrealizedRent");
const municipalTaxesInput = document.getElementById("municipalTaxes");
const interestInput = document.getElementById("interest");
const lotteryInput = document.getElementById("lottery");
const commissionInput = document.getElementById("commission");
const otherIncomeInput = document.getElementById("otherIncome");
const D80CInput = document.getElementById("D80C");
const D80CCD1Input = document.getElementById("D80CCD1");
const D80CCD2Input = document.getElementById("D80CCD2");
const D80DInput = document.getElementById("D80D");
const D80GInput = document.getElementById("D80G");
const totalIncomeDisplay = document.getElementById("totalIncome");
const interestOnCapitalDisplay = document.getElementById("interestOnCapital");
const totalDisplay = document.getElementById("total");

// Function to calculate and display total income
function calculateTotalIncome() {
    const salary = parseFloat(salaryInput.value) || 0;
    const exemption = parseFloat(exemptionInput.value) || 0;
    const deduction = parseFloat(deductionInput.value) || 0;
    const business = parseFloat(businessInput.value) || 0;
    const otherBusiness = parseFloat(otherBusinessInput.value) || 0;
    const rent = parseFloat(rentInput.value) || 0;
    const unrealizedRent = parseFloat(unrealizedRentInput.value) || 0;
    const municipalTaxes = parseFloat(municipalTaxesInput.value) || 0;
    const interest = parseFloat(interestInput.value) || 0;
    const lottery = parseFloat(lotteryInput.value) || 0;
    const commission = parseFloat(commissionInput.value) || 0;
    const otherIncome = parseFloat(otherIncomeInput.value) || 0;
    const D80C = parseFloat(D80CInput.value) || 0;
    const D80CCD1 = parseFloat(D80CCD1Input.value) || 0;
    const D80CCD2 = parseFloat(D80CCD2Input.value) || 0;
    const D80D = parseFloat(D80DInput.value) || 0;
    const D80G = parseFloat(D80GInput.value) || 0;


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