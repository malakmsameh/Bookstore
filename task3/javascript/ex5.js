// Select elements
const registerForm = document.getElementById("register-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const registerBtn = document.getElementById("register-btn");
const successMessage = document.getElementById("success-message");

// Select error spans
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const confirmError = document.getElementById("confirm-error");

function validateForm() {
    let isValid = true;

    // 1. Username Validation
    if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Required";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // 2. Password Validation
    if (passwordInput.value === "") {
        passwordError.textContent = "Required";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // 3. Confirm Password Validation & Matching
    if (confirmPasswordInput.value === "") {
        confirmError.textContent = "Required";
        isValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmError.textContent = "Passwords do not match";
        isValid = false;
    } else {
        confirmError.textContent = "";
    }

    // 4. Enable/Disable Register Button
    registerBtn.disabled = !isValid;
}

// Attach input listeners for real-time validation checks
usernameInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);
confirmPasswordInput.addEventListener("input", validateForm);

// Handle form submission
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    registerForm.style.display = "none";
    successMessage.textContent = "Successful user registration!";
});