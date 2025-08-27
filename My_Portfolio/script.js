function toggleMenu() {
  const nav = document.getElementById("nav-links");
  const burger = document.querySelector(".hamburger");
  nav.classList.toggle("show");
  burger.classList.toggle("active");
}
// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();
