const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();  // Corrected to prevent the form from submitting

    const usrHeight = parseInt(document.querySelector('#usr-height').value);
    const usrWeight = parseInt(document.querySelector('#usr-weight').value);
    const displayMessage = document.querySelector('#message');

    if (isNaN(usrHeight) || usrHeight <= 0) {
        displayMessage.innerHTML = `Please provide a valid height in cm.`;
    } else if (isNaN(usrWeight) || usrWeight <= 0) {
        displayMessage.innerHTML = `Please provide a valid weight in kg.`;
    } else {
        const bmiResult = (usrWeight / ((usrHeight / 100) ** 2)).toFixed(2);
        displayMessage.innerHTML = `<span>Your BMI is ${bmiResult}</span>`;
    }
});

