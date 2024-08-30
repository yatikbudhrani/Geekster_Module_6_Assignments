# Random Joke API

## Overview

This project sets up a Node.js server using Express.js and provides an API endpoint that returns a random joke. The random joke is fetched using an external API and returned to the client.

## Installation

1. Clone the repository:
    ```bash
    git clone `https://github.com/yatikbudhrani/Geekster_Module_6_Assignments/tree/main/randomJokeAPI`
    ```

2. Navigate to the project directory:
    ```bash
    cd randomJokeAPI
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    node index.js
    ```

5. The server will run on `http://localhost:3000`.

## API Endpoints

- **GET** `/api/joke/random`: Fetches and returns a random joke.
- **GET** `/api/image/random`: Fetches and returns a random image.
- **GET** `/api/joke&image/random`: Fetches and returns random joke and random image.

## Testing

You can test the API using Postman or curl:

- **Postman**: Make a GET request to `http://localhost:3000/api/joke/random`, `http://localhost:3000/api/image/random` and `http://localhost:3000/api/joke$image/random`.
- **Curl**:
    ```bash
    curl http://localhost:3000/api/joke/random
    ```

## Challenges

One challenge encountered during this project was ensuring that the external API provided a consistent source of random jokes. The "Official Joke API" was selected for its simplicity and reliability.

## Conclusion

This project demonstrates how to set up a simple Node.js server with Express.js and integrate third-party services to enhance functionality.
