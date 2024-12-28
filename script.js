// Select elements
const totalAmountInput = document.getElementById('total-amount');
const numPeopleInput = document.getElementById('num-people');
const calculateBtn = document.getElementById('calculate-btn');
const resultDisplay = document.getElementById('result');

// Calculate and display the split amount
calculateBtn.addEventListener('click', () => {
    const totalAmount = parseFloat(totalAmountInput.value);
    const numPeople = parseInt(numPeopleInput.value);

    if (isNaN(totalAmount) || isNaN(numPeople) || totalAmount <= 0 || numPeople <= 0) {
        alert('Please enter valid values for both fields.');
        return;
    }

    const splitAmount = (totalAmount / numPeople).toFixed(2);
    resultDisplay.innerHTML = `Each person owes: <span>₹${splitAmount}</span>`;
});
