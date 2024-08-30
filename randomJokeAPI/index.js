const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const display = `<div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 2rem;
      "
    >
      <h1>Welcome to random Joke and random Image API!</h1>
      <ol>
        <li>Navigate to /api/joke/random for a random joke.</li>
        <li>Navigate to /api/image/random for a random image.</li>
        <li>
          Navigate to /api/joke&image/random for a random joke and a random
          image.
        </li>
      </ol>
    </div>`;
  res.send(display);
});

// Route to fetch a random joke
app.get("/api/joke/random", async (req, res) => {
  try {
    // Fetch a random joke from the "Official Joke API"
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const joke = `<div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 2rem;
      "
    >
      <p>Here a joke on the topic ${response.data.type}</p>
      <h3>Setup: ${response.data.setup}</h3>
      <h3>Punchline: ${response.data.punchline}</h3>
    </div>`;
    res.send(joke);
  } catch (error) {
    console.error("Error fetching random joke:", error);
    res.status(500).json({ message: "Failed to fetch a random joke" });
  }
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

// Route to fetch random joke and random image
app.get("/api/joke&image/random", async (req, res) => {
  try {
    const responseJoke = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const responseImg = await axios.get("https://picsum.photos/250?random=1");

    const jokeAndImage = `<div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 2rem;
      "
    >
      <img style="margin: 1rem" src="${responseImg.request.res.responseUrl}" alt="Random Image">
      <p>Here a joke on the topic ${responseJoke.data.type}</p>
      <h3>Setup: ${responseJoke.data.setup}</h3>
      <h3>Punchline: ${responseJoke.data.punchline}</h3>
    </div>`;

    res.send(jokeAndImage);
  } catch (error) {
    console.error("Error fetching random joke and random image:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch random joke and random image" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
