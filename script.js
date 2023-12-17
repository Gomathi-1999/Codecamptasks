document.addEventListener('DOMContentLoaded', function () {
    const colorDisplay = document.getElementById('color-display');
    const flipButton = document.getElementById('flip-button');
  
    // Function to generate a random hex color
    function getRandomColor() {
      return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
  
    // Function to update the color display
    function updateColor() {
      const randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
      colorDisplay.textContent = randomColor;
    }
  
    // Event listener for the flip button
    flipButton.addEventListener('click', updateColor);
  
    // Initial color update
    updateColor();
  });