const { User: UserModel } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
  create: async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username) {
        return res.status(422).json({ message: "Username is required." });
      }
      const salt = await bcrypt.genSalt(11);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await UserModel.create({
        username,
        password: hashedPassword,
      });
      res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred while registering the user." });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ username });

      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(422).json({ message: "Invalid credentials." });
      }

      const secret = process.env.SECRET;
      const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "1h" });

      res.status(200).json({ token, msg: "Authentication successful!" });
    } catch (error) {
      res.status(500).json({ message: "An error occurred while logging in." });
    }
  },
};

module.exports = userController;
