const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const error = document.getElementById("error");

const dashboard = document.getElementById("dashboard");
const welcome = document.getElementById("welcome");
const logoutBtn = document.getElementById("logoutBtn");

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  error.textContent = "";

  if (email.length === 0) {
    error.textContent = "Email is required";
    return;
  }
  if (!isValidEmail(email)) {
    error.textContent = "Email is invalid";
    return;
  }
  if (password.length === 0) {
    error.textContent = "Password is required";
    return;
  }
  if (password !== "1234") {
    error.textContent = "Wrong credentials";
    return;
  }

  dashboard.style.display = "block";
  welcome.textContent = `Welcome, ${email}!`;
});

logoutBtn.addEventListener("click", () => {
  dashboard.style.display = "none";
  emailInput.value = "";
  passwordInput.value = "";
  error.textContent = "";
  welcome.textContent = "";
});
