const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Random Image API! Navigate to /api/image/random");
});

// Route to fetch a random image
app.get("/api/image/random", async (req, res) => {
  try {
    const response = await axios.get("https://picsum.photos/250?random=1");

    // Redirect the user to the random image URL
    res.redirect(response.request.res.responseUrl);
  } catch (error) {
    console.error("Error fetching random image:", error);
    res.status(500).json({ message: "Failed to fetch a random image" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
