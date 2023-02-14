function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Get the image
  const img = document.querySelector("#profile img");

  //Switching Images
  if (html.classList.contains("light")) {
    // If it's on light mode, set to light image
    img.setAttribute("src", "./assets/avatar.png");
  } else {
    // If it's on dark mode, set to dark image
    img.setAttribute("src", "./assets/avatar-light.png");
  }
}
