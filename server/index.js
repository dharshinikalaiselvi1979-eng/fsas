const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Simple schema
const User = mongoose.model("User", {
  name: String,
  email: String
});

// Routes

app.post("/user", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});
app.listen(5000, () => console.log("Server running on port 5000"));
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});