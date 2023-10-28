const faqHeader = document.querySelectorAll(".faq-group-header");
faqHeader.forEach((header) => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("open");
    header.querySelector("i").classList.toggle("fa-minus");
    header.querySelector("i").classList.toggle("fa-plus");
  });
});
