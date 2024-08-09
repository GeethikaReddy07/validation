document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("validationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    let valid = true;

    // Validate Name
    const name = document.getElementById("contact-name").value.trim();
    const nameError = document.getElementById("name-error");
    if (name === "") {
      nameError.textContent = "Name is required";
      valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      nameError.textContent = "Invalid name format";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    // Validate Phone
    const phone = document.getElementById("contact-phone").value.trim();
    const phoneError = document.getElementById("phone-error");
    if (phone === "") {
      phoneError.textContent = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      phoneError.textContent = "Phone number should be exactly 10 digits";
      valid = false;
    } else {
      phoneError.textContent = "";
    }

    // Validate Email
    const email = document.getElementById("contact-email").value.trim();
    const emailError = document.getElementById("email-error");
    if (email === "") {
      emailError.textContent = "Email is required";
      valid = false;
    } else if (!/^[A-Za-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      emailError.textContent = "Invalid email format";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    // Validate Message
    const message = document.getElementById("contact-message").value.trim();
    const messageError = document.getElementById("message-error");
    const required = 30;
    const left = required - message.length;
    if (left > 0) {
      messageError.textContent = left + " more characters required";
      valid = false;
    } else {
      messageError.textContent = "";
    }

    // Form submission error
    const submitError = document.getElementById("submit-error");
    if (!valid) {
      submitError.textContent = "Please fix the errors above";
    } else {
      submitError.textContent = "";
      alert("Form submitted successfully!");
      form.reset();
    }
  }
});
