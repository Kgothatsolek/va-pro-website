document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (name && email && message) {
    document.getElementById("formMessage").textContent =
      "Thank you! Your message has been sent.";
    this.reset();
  } else {
    document.getElementById("formMessage").textContent =
      "Please fill in all fields.";
  }
});
