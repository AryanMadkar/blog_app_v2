const express = require("express");
const { register, login, logout } = require("../middlewares/USers.controller");
const { verifyToken } = require("../controllers/Userauth.middleawre");
const {
  createblog,
  getblog,
  getblogbyid,
  deleteblog,
} = require("../middlewares/BLog.controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

router.post("/createblog", createblog);
router.get("/getblog", getblog);
router.get("/getblog/:id", getblogbyid);
router.delete("/deleteblog/:id", deleteblog);

module.exports = router;
