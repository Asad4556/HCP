// 🔐 Login Function
function loginUser(cnic, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.cnic === cnic && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    localStorage.setItem("currentUser", JSON.stringify(user));

    if (user.role.toLowerCase().includes("admin")) {
      window.location.href = "super_admin_dashboard.html";
    } else {
      window.location.href = "section_dashboard.html";
    }
  } else {
    alert("❌ Invalid CNIC or Password");
  }
}

// ✅ Show/Hide Password
function togglePasswordVisibility(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// 🧾 Add New User
function addUser() {
  const name = docume
