// Create a webpage with a 16x16 grid of square divs.
// Create divs dynamically
const container = document.getElementById('container');

// Default Grid 16x16
createGrid(16);

function createGrid(gridSize) {
  deleteGrid();

  // Set width property dynamically based on gridSize
  const gridStyle = `width: calc(100% / ${gridSize});`;

  // Create grid cells using nested loops
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('grid-child');

      // Apply the dynamic width calculation
      newDiv.setAttribute('style', gridStyle);

      newDiv.addEventListener('mouseover', function (e) {
        e.target.style.backgroundColor = 'green';
      });

      container.appendChild(newDiv);
    }
  }
}

function deleteGrid() {
  // Remove all child elements from container
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}


function resizeCanvas() {
  let userInput = prompt("Enter the number of squares per side (1-100):");
  // You can add grid-clearing and recreation logic here later
  userInput = parseInt(userInput);
  if (userInput >= 1 && userInput <= 100) {
    createGrid(userInput);
  } else {
    alert("Please enter a number between 1 and 100!");
  }
}

// Fix Reset button later
function resetGrid() {
  const highlightedItems = userList.querySelectorAll('div');
  highlightedItems.forEach((userItem) => {
    userItem.style.backgroundColor = 'white';
  });
}