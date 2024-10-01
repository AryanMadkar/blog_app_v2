const User = require("../models/register.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    //for getting data from body
    const { name, email, password, confirmpassword, gender } = req.body;
    if (!name || !email || !password || !confirmpassword || !gender) {
      return res.status(400).json({ error: "All fields are required" });
    }
    //for checking password and confirm password are same or not
    if (password !== confirmpassword) {
      return res
        .status(400)
        .json({ error: "Password and Confirm Password do not match" });
    }
    //for hashing password
    const hashedPassword = await bcrypt.hash(password, 10);
    //for finding existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    let profilepic;
    if (gender === "male") {
      profilepic = "https://avatar.iran.liara.run/public/boy";
    } else if (gender === "female") {
      profilepic = "https://avatar.iran.liara.run/public/girl";
    } else {
      profilepic = "https://avatar.iran.liara.run/public";
    }
    //for creating new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      gender,
      profilepic,
    });
    //for sending response
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    //for handling error
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    //for getting data from body
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    //for finding user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    //for comparing password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }
    //for creating token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    //for sending response

    res
      .status(200)
      .cookie("token1", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token1", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });
    console.log(res.getHeaders());
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login, logout };
