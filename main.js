const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  const linkPath = new URL(link.href).pathname;

  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});
