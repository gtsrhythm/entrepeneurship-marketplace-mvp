// Custom cursor functionality for hero section
const customCursor = document.getElementById('customCursor');
const heroSection = document.querySelector('.hero-section');
const buttons = heroSection ? heroSection.querySelectorAll('a') : [];

let cursorVisible = false;
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const delay = 0.15; // Adjust this value for more/less delay (0.1 - 0.3 works well)

// Show/hide cursor based on hero section
heroSection?.addEventListener('mouseenter', () => {
  cursorVisible = true;
  customCursor.style.opacity = '1';
});

heroSection?.addEventListener('mouseleave', () => {
  cursorVisible = false;
  customCursor.style.opacity = '0';
});

// Track cursor position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate cursor with delay
function animateCursor() {
  if (cursorVisible) {
    cursorX += (mouseX - cursorX) * delay;
    cursorY += (mouseY - cursorY) * delay;
    
    customCursor.style.left = cursorX + 'px';
    customCursor.style.top = cursorY + 'px';
  }
  requestAnimationFrame(animateCursor);
}

animateCursor();

// Fill cursor when hovering over buttons
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    customCursor.classList.add('filled');
  });
  
  button.addEventListener('mouseleave', () => {
    customCursor.classList.remove('filled');
  });
});

// Initialize cursor as hidden
customCursor.style.opacity = '0';
