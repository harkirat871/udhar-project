const express = require("express");
const app = express();
const path = require("path");

// Serve static files from "udhaar-project"
app.use(express.static(path.join(__dirname, "udhaar-project")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "udhaar-project", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
