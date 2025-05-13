// DOM elements
const button = document.getElementById("animateButton");
const animationToggle = document.getElementById("animationToggle");

// Check for saved user preferences in localStorage
window.onload = () => {
  const isAnimationEnabled = localStorage.getItem("animationEnabled") === "true";
  animationToggle.checked = isAnimationEnabled;

  if (isAnimationEnabled) {
    button.classList.add("animate");
  }
};

// Function to handle animation toggle
animationToggle.addEventListener("change", () => {
  const isAnimationEnabled = animationToggle.checked;
  
  // Store the preference in localStorage
  localStorage.setItem("animationEnabled", isAnimationEnabled);

  // Toggle animation class on the button
  if (isAnimationEnabled) {
    button.classList.add("animate");
  } else {
    button.classList.remove("animate");
  }
});

// Function to trigger animation when the button is clicked
button.addEventListener("click", () => {
  if (animationToggle.checked) {
    alert("Animation is enabled!");
  } else {
    alert("Animation is disabled.");
  }
});
