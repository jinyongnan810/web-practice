const faqHeader = document.querySelectorAll(".faq-group-header");
faqHeader.forEach((header) => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("open");
    header.querySelector("i").classList.toggle("fa-minus");
    header.querySelector("i").classList.toggle("fa-plus");
  });
});

const navHamburgerButton = document.querySelector(".hamburger-button");
const mobileMenu = document.querySelector(".mobile-menu");
navHamburgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
