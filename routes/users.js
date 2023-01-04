const express = require("express");
const router = express.Router();
const { check, validationResult, body } = require("express-validator");

/* Controllers */
const usersController = require("../controllers/users");

router.post(
  "/user-signup",
  [check("email").isEmail(), check("password").isLength({ min: 6 })],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    usersController.handleNewUser(req, res);
  }
);

router.post("/auth", (req, res) => {
  usersController.handleLogin(req, res);
});

router.post("/refresh", (req, res) => {
  usersController.handleRefreshToken(req, res);
});

// router.post("/forgotPassword", (req, res) => {
//   usersController.handleForgotPassword(req, res);
// });

// router.get("/reset", (req, res) => {
//   usersController.handleResetPassword(req, res);
// });

// router.put("/updatePassword", (req, res) => {
//   usersController.handleUpdatePassword(req, res);
// });

module.exports = router;
