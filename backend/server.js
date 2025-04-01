require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  contactNumber: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// API Route to save contact form data
app.post("/api/contact", async (req, res) => {
  try {
    const { name, contactNumber } = req.body;
    const newContact = new Contact({ name, contactNumber });
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving contact" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
