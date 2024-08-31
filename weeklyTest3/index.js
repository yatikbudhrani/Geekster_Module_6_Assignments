const express = require("express");
const app = express();
app.use(express.json());

// Error handling middleware
const errorHandlingMiddleware = (err, req, res, next) => {
  if (err) {
    console.log({ error: err.message });
    res.status(400).json({ error: err.message });
  } else {
    next();
  }
};

// Validate first and last name
const validateName = (name, fieldName) => {
  if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
    throw new Error(`${fieldName} must start with an uppercase letter.`);
  }
};

// Validate password
const validatePassword = (password) => {
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumeric = /[0-9]/.test(password);

  if (!hasSpecialChar || !hasUpperCase || !hasNumeric) {
    throw new Error(
      "Password must contain at least one special character, one uppercase letter, and one numeric character."
    );
  }

  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long.");
  }
};

// Validate email address
const validateEmail = (email) => {
  if (!email.includes("@")) {
    throw new Error("Invalid email address - missing @ symbol");
  }
};

// Validate phone number
const validatePhoneNumber = (phoneNumber) => {
  if (phoneNumber.length < 10) {
    throw new Error("Phone number must be at least 10 digits long.");
  }
};

// User registration route
app.post("/register", (req, res, next) => {
  try {
    const { firstName, lastName, password, email, phoneNumber } = req.body;

    // Validate input data
    validateName(firstName, "First name");
    validateName(lastName, "Last name");
    validatePassword(password);
    validateEmail(email);
    validatePhoneNumber(phoneNumber);

    // If validation passes, send success response
    console.log({ message: "User registered successfully!" });
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    next(err);
  }
});

// Use the error handling middleware
app.use(errorHandlingMiddleware);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
