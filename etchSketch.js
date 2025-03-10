// Create a webpage with a 16x16 grid of square divs.
// Create divs dynamically
const container = document.getElementById('container');

// loop 16 times
for (let i = 0; i < 16; i++) {
  //loop 16 times again to create grid
  for (let j = 0; j < 16; j++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-child');
    container.appendChild(newDiv);
  }
}

