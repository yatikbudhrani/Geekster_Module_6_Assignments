# Random Image API

## Overview

This project sets up a Node.js server using Express.js and provides an API endpoint that returns a random image. The random image is fetched using an external API and returned to the client.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```bash
    cd random-image-api
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

- **GET** `/api/image/random`: Fetches and returns a random image.

## Testing

You can test the API using Postman or curl:

- **Postman**: Make a GET request to `http://localhost:3000/api/image/random`.
- **Curl**:
    ```bash
    curl http://localhost:3000/api/image/random
    ```

## Challenges

One of the challenges encountered during this project was ensuring that the external API provided a reliable source of random images. We chose Unsplash Source because it provides high-quality images without requiring an API key.

## Conclusion

This project demonstrates how to set up a simple Node.js server with Express.js and integrate third-party services to enhance functionality.
