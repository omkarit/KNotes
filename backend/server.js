const { application } = require("express");
const express = require("express");
const notes = require("../data/notes");
const app = express();
const dotenv = require("dotenv");

const PORT = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("api is running");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});
app.listen(PORT, console.log(`server started on port ${PORT}`));
