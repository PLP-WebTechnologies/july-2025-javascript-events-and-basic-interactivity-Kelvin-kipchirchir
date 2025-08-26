// === Part 1: Event Handling ===
document.getElementById("messageBtn").addEventListener("click", function () {
    document.getElementById("message").textContent = "Hello user You clicked the button as a response of onclickListener";
  });
  
  // === Part 2: Interactive Elements ===
  
  // Light/Dark mode switch
  document.getElementById("toggleMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
  
  // Counter
  let count = 0;
  document.getElementById("incrementBtn").addEventListener("click", function () {
    count++;
    document.getElementById("count").textContent = count;
  });
  
  // FAQ Questions section
  document.querySelector(".faq-toggle").addEventListener("click", function () {
    const answer = document.querySelector(".faq-answer");
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
  
  // Part 3: Form Validation
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting if invalid
  
    // Clear old errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("formSuccess").textContent = "";
  
    let isValid = true;
  
    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required";
      isValid = false;
    }
  
    // Email validation ->used regex query
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email";
      isValid = false;
    }
  
    // Password validation (at least 8 chars)
    const password = document.getElementById("password").value;
    if (password.length < 8) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters";
      isValid = false;
    }
  
    // Success message if valid
    if (isValid) {
      document.getElementById("formSuccess").textContent =
        "Form submitted successfully!";
      document.getElementById("myForm").reset();
    }
  });
  