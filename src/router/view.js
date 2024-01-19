const express = require("express");
const auth = require("../middleware/auth");
const isLoggedIn = require("../middleware/isLoggedIn");
const router = express.Router();
const Complaint = require("../model/complaint");
const User = require("../model/user");

//router.use(isLoggedIn); // we must place this before any other routes

router.get("/", (req, res) => {
  res.status(200).render("home");
});

router.get("/signup", (req, res) => {
  res.status(200).render("signup");
});

router.get("/admin-login", (req, res) => {
  res.status(200).render("admin-login");
});

router.get("/login", (req, res) => {
  res.status(200).render("login");
});

router.get("/new-complaint", auth, (req, res) => {
  res.status(200).render("register-complaint");
});

router.get("/admin-complaint-details", (req, res) => {
  res.status(200).render("admin-complaint-details");
});

router.get("/complaint-details/:id", async (req, res) => {
  const complaint = await Complaint.findById(req.params.id);
  const user = await User.findById(complaint.author);
  res.status(200).render("complaint-details", { complaint, user });
});

router.get("/unresolved-complaints", (req, res) => {
  res.status(200).render("unresolved-complaints");
});

router.get("/resolve-complaint", (req, res) => {
  res.status(200).render("resolve-complaint");
});

router.get("/resolved-complaints", (req, res) => {
  res.status(200).render("admin-resolved-complaints");
});

router.get("/mycomplaints", auth, (req, res) => {
  res.status(200).render("complaint-history");
});

router.get("/manage-users", (req, res) => {
  res.status(200).render("admin-manage-users");
});

router.get("/user-profile", (req, res) => {
  res.status(200).render("admin-user-profile");
});

// router.get("/me", (req, res) => {
//   res.status(200).render("dashboard");
// });

router.get("/dashboard", auth, (req, res) => {
  res.status(200).render("dashboard");
});

module.exports = router;
