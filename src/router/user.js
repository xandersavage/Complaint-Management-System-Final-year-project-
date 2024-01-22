const express = require("express");
const User = require("../model/user");
const auth = require("../middleware/auth");
const adminAuth = require("../middleware/adminAuth");
const { sendWelcomeEmail } = require("../emails/account");
const router = express.Router();

//GET ALL USERS
router.get("/users", auth, adminAuth, async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
});

//GET MY PROFILE
router.get("/users/profile", auth, async (req, res) => {
  res.send(req.user);
});

//CREATE A NEW USER
router.post("/users/register", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();

    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 1000
      ),
      httpOnly: true //so that client wont be able to change our cookies
    };

    res.cookie("jwt", token, cookieOptions);

    res.status(201).send({ user, token });
    sendWelcomeEmail(user.email, user.name);
  } catch (error) {
    res.status(400).send(error);
  }
});

//LOGIN USER
router.post("/users/login", async (req, res) => {
  try {
    // res.cookie("test", "This is a test cookie");

    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();

    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 1000
      ),
      httpOnly: true //so that client wont be able to change our cookies
    };

    res.cookie("jwt", token, cookieOptions);

    res.send({ user, token });
  } catch (error) {
    res.status(400).send();
  }
});

//UPDATE MY PROFILE
router.patch("/users/profile", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "age", "college", "department"]; // you can include password
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  // console.log(isValidOperation);
  // console.log(updates);
  // console.log(req.body);
  // console.log(req.user);
  if (!isValidOperation) {
    return res.status(400).send({ error: "invalid update" });
  }
  try {
    updates.forEach(update => {
      req.user[update] = req.body[update];
      // console.log(req.user[update]);
      // console.log(`${req.user[update]} = ${req.body[update]}`);
    });
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//DELETE MY PROFILE
router.delete("/users/profile", auth, async (req, res) => {
  try {
    console.log(req.user);
    await req.user.deleteOne();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

//LOGOUT PROFILE
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send("logged out");
  } catch (e) {
    res.status(500).send();
  }
});

//LOGOUT PROFILE USING COOKIES
/*
we cant delete the cookie created during login because
of the httpOnly field we use, so we use this nice
trick to overwrite the jwt value
remember to use GET request
*/
router.get("/users/Logout", async (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).send();
});

//LOGOUT OF ALL DEVICES
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.status(200).send();
  } catch (e) {
    res.status(500);
  }
});

module.exports = router;
