const express = require("express");
const auth = require("../middleware/auth");
//const isLoggedIn = require("../middleware/isLoggedIn");
const adminAuth = require("../middleware/adminAuth");
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

router.get(
  "/admin-complaint-details/:id",
  auth,
  adminAuth,
  async (req, res) => {
    const complaint = await Complaint.findById(req.params.id);
    const user = await User.findById(complaint.author);

    const numResolved = await Complaint.countDocuments({ status: "Resolved" });
    const numOngoing = await Complaint.countDocuments({ status: "Ongoing" });
    res.status(200).render("admin-complaint-details", {
      complaint,
      user,
      numResolved,
      numOngoing
    });
  }
);

router.get("/complaint-details/:id", auth, async (req, res) => {
  const complaint = await Complaint.findById(req.params.id);
  const user = await User.findById(complaint.author);
  res.status(200).render("complaint-details", { complaint, user });
});

router.get("/unresolved-complaints", auth, adminAuth, async (req, res) => {
  const complaint = await Complaint.find({ status: "Ongoing" });

  const numResolved = await Complaint.countDocuments({ status: "Resolved" });
  const numOngoing = await Complaint.countDocuments({ status: "Ongoing" });
  res
    .status(200)
    .render("unresolved-complaints", { complaint, numResolved, numOngoing });
});

router.get("/resolve-complaint/:id", auth, adminAuth, async (req, res) => {
  const complaint = await Complaint.findById(req.params.id);
  res.status(200).render("resolve-complaint", { complaint });
});

router.get("/resolved-complaints", auth, adminAuth, async (req, res) => {
  const complaint = await Complaint.find({ status: "Resolved" });
  const user = await User.findById(complaint.author);

  const numResolved = await Complaint.countDocuments({ status: "Resolved" });
  const numOngoing = await Complaint.countDocuments({ status: "Ongoing" });
  res.status(200).render("admin-resolved-complaints", {
    complaint,
    user,
    numResolved,
    numOngoing
  });
});

router.get("/mycomplaints", auth, (req, res) => {
  res.status(200).render("complaint-history");
});

router.get("/manage-users", auth, adminAuth, async (req, res) => {
  const user = await User.find();

  const numResolved = await Complaint.countDocuments({ status: "Resolved" });
  const numOngoing = await Complaint.countDocuments({ status: "Ongoing" });
  res
    .status(200)
    .render("admin-manage-users", { user, numResolved, numOngoing });
});

router.get("/user-profile/:id", auth, adminAuth, async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).render("admin-user-profile", { user });
});

// router.get("/me", (req, res) => {
//   res.status(200).render("dashboard");
// });

router.get("/dashboard", auth, (req, res) => {
  res.status(200).render("dashboard");
});

module.exports = router;
