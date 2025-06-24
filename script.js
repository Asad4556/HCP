// script.js

// 🔐 Login Function
function loginUser(cnic, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.cnic === cnic && u.password === password);

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
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

// 🧾 Create New User
function addUser() {
  const name = document.getElementById("name").value.trim();
  const cnic = document.getElementById("cnic").value.trim();
  const role = document.getElementById("role").value.trim();
  const section = document.getElementById("section").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !cnic || !role || !section || !password) {
    return alert("Please fill all fields!");
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find(u => u.cnic === cnic)) {
    return alert("User already exists!");
  }

  users.push({ name, cnic, role, section, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("✅ User added successfully");
  location.reload();
}

// 🗑️ Delete User
function deleteUser(cnic) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users = users.filter(u => u.cnic !== cnic);
  localStorage.setItem("users", JSON.stringify(users));
  alert("🗑️ User deleted");
  location.reload();
}
