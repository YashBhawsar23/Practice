const express = require("express");
const User = require("../models/user");
// const user = require("../models/user");

const router = express.Router();

// Create A User
router.post("/create", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get A Single User
router.get("/:id", async (req, res) => {
  try {
    // const id = Number();
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params; // Extract ID
//     const foundUser = await User.findById(id); // Fetch user by ID

//     if (!foundUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     return res.status(200).json(foundUser);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// Update a User
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a User
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
