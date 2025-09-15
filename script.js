const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const toggleText = document.getElementById("toggle-text");
const toggleLink = document.getElementById("toggle-link");
let isLogin = true;

toggleLink.addEventListener("click", () => {
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? "Login to Your AI" : "Sign Up for Your AI";
  submitBtn.textContent = isLogin ? "Login" : "Sign Up";
  toggleText.innerHTML = isLogin
    ? `Don't have an account? <span id="toggle-link">Sign up</span>`
    : `Already have an account? <span id="toggle-link">Login</span>`;
});

document.getElementById("auth-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  alert(`${isLogin ? "Logging in" : "Signing up"} as ${username}`);
  // You can replace this with actual backend logic
});
