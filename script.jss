// ==========================
//  Part 1: Event Handling
// ==========================

// Click event
document.getElementById("clickMeBtn").addEventListener("click", function() {
  document.getElementById("clickMessage").textContent = "You clicked the button 🎉";
});

// Mouseover event
document.getElementById("hoverInput").addEventListener("mouseover", function() {
  document.getElementById("hoverMessage").textContent = "You're hovering over the input ✨";
});

// ==========================
//  Part 2: Interactive Features
// ==========================

// Dark/Light mode toggle
document.getElementById("toggleModeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
document.getElementById("increaseBtn").addEventListener("click", function() {
  counter++;
  document.getElementById("counterValue").textContent = counter;
});

document.getElementById("decreaseBtn").addEventListener("click", function() {
  counter--;
  document.getElementById("counterValue").textContent = counter;
});

// FAQ Accordion
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", function() {
    this.classList.toggle("active");
  });
});


// ==========================
// 📋 Part 3: Form Validation
// ==========================

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (simple regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Final check
  if (isValid) {
    document.getElementById("formMessage").textContent = "✅ Form submitted successfully!";
    document.getElementById("formMessage").style.color = "green";
  } else {
    document.getElementById("formMessage").textContent = "❌ Please fix the errors above.";
    document.getElementById("formMessage").style.color = "red";
  }
});
