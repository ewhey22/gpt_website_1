const cursorDot = document.getElementById("cursorDot");
const cursorTrail = document.getElementById("cursorTrail");
const trailElements = Array.from(cursorTrail.getElementsByClassName("trail"));
const trailLength = trailElements.length;
const positions = [];

document.addEventListener("mousemove", (e) => {
  // Update dot position
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
  
  // Store cursor positions
  positions.push({ x: e.clientX, y: e.clientY });
  
  // Remove old positions
  while (positions.length > trailLength * 2) {
    positions.shift();
  }

  // Update tail positions
  trailElements.forEach((trail, index) => {
    const posIndex = Math.floor(positions.length - (index + 1) * 2);
    if (posIndex >= 0) {
      const pos = positions[posIndex];
      trail.style.left = `${pos.x}px`;
      trail.style.top = `${pos.y}px`;
    }
  });
});


function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener("mousemove", (e) => {
  // Update dot position and color
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
  cursorDot.style.backgroundColor = getRandomColor();
  
  // Store cursor positions
  positions.push({ x: e.clientX, y: e.clientY });

  // Remove old positions
  while (positions.length > trailLength * 2) {
    positions.shift();
  }

  // Update tail positions and color
  trailElements.forEach((trail, index) => {
    const posIndex = Math.floor(positions.length - (index + 1) * 2);
    if (posIndex >= 0) {
      const pos = positions[posIndex];
      trail.style.left = `${pos.x}px`;
      trail.style.top = `${pos.y}px`;
      trail.style.backgroundColor = getRandomColor();
    }
  });
});


