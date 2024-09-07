// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color
function changeBackgroundColor() {
    const coverPage = document.querySelector('body');
    coverPage.style.backgroundColor = getRandomColor();
}

// Add event listener to the button
document.getElementById('btn-style').addEventListener('click',changeBackgroundColor);
