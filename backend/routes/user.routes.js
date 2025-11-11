const express = require("express");
const { userSignIn,userLogin,updateMoodAvg} = require("../controllers/user.controllers");

const router = express.Router();

router.post("/signin", userSignIn);
router.post("/login", userLogin);
router.post("/moodavg", updateMoodAvg);

module.exports = router;
