const displayClock = document.querySelector('#clock');

setInterval(function(){
    let time = new Date();
    displayClock.innerHTML = time.toLocaleTimeString();
    displayClock.style.color = 'black';  // Change the color of the clock
    displayClock.style.fontSize = '20px'; // Increase the font size
}, 1000);
