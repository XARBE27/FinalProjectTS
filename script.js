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

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.disabled = true;

    setTimeout(() => {
      button.disabled = false;
    }, 1000);
  });
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menu.contains(e.target)) {
    navLinks.classList.remove("show");
    menu.innerHTML = "☰";
  }
});
