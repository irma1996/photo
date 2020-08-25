const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile_controller");

/* GET resources / */
router.get("/", profileController.getProfile);

module.exports = router;
