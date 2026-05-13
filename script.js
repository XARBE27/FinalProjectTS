const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    menu.innerHTML = "✕";
  } else {
    menu.innerHTML = "☰";
  }
});
