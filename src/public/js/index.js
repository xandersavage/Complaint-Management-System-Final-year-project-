//import core from "core-js"; //this will ONLY work with a bundler
import { login, logout } from "./login";
import { createNewComplaint } from "./createcomplaint";
import { createNewUser } from "./createuser";
import { adminLogin } from "./adminlogin";
import { resolveComplaint } from "./resolvecomplaint";
import { updateProfile } from "./updateprofile";

const loginForm = document.querySelector(".form-login");
const logoutButton = document.querySelector(".logout");
const complaintForm = document.getElementById("complaintform");
const signupForm = document.getElementById("signupForm");
const adminLoginForm = document.getElementById("adminlogin");
const resolveComplaintForm = document.getElementById("updatecomplaint");
const updateUserForm = document.getElementById("updateUserForm");
const adminLogout = document.getElementById("adminLogout");

if (resolveComplaintForm)
  resolveComplaintForm.addEventListener("submit", e => {
    e.preventDefault();
    const complaintId = document.getElementById("complaintId").innerText;
    const complaintRemark = document.getElementById("complaintRemark").value;

    resolveComplaint(complaintId, complaintRemark);
  });

if (adminLoginForm)
  adminLoginForm.addEventListener("submit", e => {
    e.preventDefault();
    const adminEmail = document.getElementById("adminemail").value;
    const adminPassword = document.getElementById("adminpassword").value;
    adminLogin(adminEmail, adminPassword);
  });

if (signupForm) {
  signupForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("userName").value;
    const age = document.getElementById("userAge").value;
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;
    const college = document.getElementById("userCollege").value;
    const department = document.getElementById("userDepartment").value;
    createNewUser(name, age, email, password, college, department);
  });
}

if (loginForm)
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

if (logoutButton) logoutButton.addEventListener("click", logout);

if (adminLogout) adminLogout.addEventListener("click", logout);

if (complaintForm) {
  complaintForm.addEventListener("submit", e => {
    e.preventDefault();
    const type = document.getElementById("complainttype").value;
    const priority = document.getElementById("complaintpriority").value;
    const title = document.getElementById("complainttitle").value;
    const description = document.getElementById("complaindetails").value;
    createNewComplaint(type, priority, title, description);
  });
}

if (updateUserForm) {
  updateUserForm.addEventListener("submit", e => {
    e.preventDefault();
    const updateName = document.getElementById("updateName").value;
    const userCollege = document.getElementById("updateCollege").value;
    const userDepartment = document.getElementById("updateDepartment").value;
    const updateEmail = document.getElementById("updateEmail").value;
    const updateAge = document.getElementById("updateAge").value;

    updateProfile(
      updateName,
      updateEmail,
      updateAge,
      userCollege,
      userDepartment
    );
  });
}
