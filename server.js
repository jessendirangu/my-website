const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let appointments = []; // temporary storage

// SAVE appointment
app.post("/appointments", (req, res) => {
  const data = req.body;
  appointments.push(data);
  console.log("Saved:", data);
  res.json({ message: "Saved successfully" });
});

// GET all appointments (THIS WAS MISSING ❗)
app.get("/appointments", (req, res) => {
  res.json(appointments);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});