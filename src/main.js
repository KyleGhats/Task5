const navMenu = document.getElementById("nav-menu");

function toggleMenu() {
  navMenu.classList.toggle("hidden");
}

// Add shadow on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 70) {
    navbar.classList.add("shadow-md");
  } else {
    navbar.classList.remove("shadow-md");
  }
});
