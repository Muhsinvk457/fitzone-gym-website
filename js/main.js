// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    if (window.innerWidth < 768) {
      navLinks.style.display = "none";
    }
  });
});

// ===== Contact Form Validation =====
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");
  let valid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.border = "2px solid red";
      valid = false;
    } else {
      input.style.border = "none";
    }
  });

  if (!valid) {
    alert("Please fill all fields");
    return;
  }

  alert("Message sent successfully!");
  form.reset();
});
