// async function getData() {
//   const url = "http://localhost:3000/";
//   const data = await fetch (url)
//   console
// }


const loggedUser = localStorage.getItem("loggedUser");

if (loggedUser) {
  window.location.href = "./../pages/home.html";
}


const loginForm = document.getElementById("loginForm");

loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find(
    (user) => user.email === email && user.password === password && user.role === role
  );

  if (userExists) {
    localStorage.setItem("loggedUser", JSON.stringify(userExists));
    window.location.href = "./../pages/home.html";
    sessionStorage.setItem("session", JSON.stringify(userExists));
  } else {
    alert("Invalid credentials");
  }
});

const registerForm = document.getElementById("registerForm");

registerForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = "user"

  const users = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users)

  const newUser = { email, password, role }

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedUser", JSON.stringify(newUser));
  sessionStorage.setItem("session", JSON.stringify(newUser));
  window.location.href = "home.html";
});