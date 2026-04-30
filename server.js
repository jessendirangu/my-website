const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let appointments = []; // temporary storage

// ✅ ROOT ROUTE (for testing backend)
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// ✅ SAVE appointment
app.post("/appointments", (req, res) => {
  const data = req.body;
  appointments.push(data);
  console.log("Saved:", data);
  res.json({ message: "Saved successfully" });
});

// ✅ GET all appointments
app.get("/appointments", (req, res) => {
  res.json(appointments);
});

// ✅ START SERVER (important for Render)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
