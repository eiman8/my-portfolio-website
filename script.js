const hamburger = document.querySelector("#hamburger-btn");
const menuLinks = document.querySelector('.nav-links');

hamburger.addEventListener("click", () => {
  // Toggle the 'active' class
  hamburger.classList.toggle("active");
  menuLinks.classList.toggle('active');
});

