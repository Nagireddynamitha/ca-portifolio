// Toggle mobile menu visibility
const menuIcon = document.getElementById("menu-bar-icone");
const navbarContainer = document.querySelector(".navbar-container");

menuIcon.addEventListener("click", () => {
  navbarContainer.classList.toggle("active");
});
