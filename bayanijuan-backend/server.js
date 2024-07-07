const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 5010;

// MySQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root_123",
  database: "wdproj",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database");
});

// Middleware to parse JSON bodies and enable CORS
app.use(express.json());
app.use(cors());

// Route to get all data from registerform table
app.get("/registerform", (req, res) => {
  const sql = "SELECT * FROM registerform";
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Route to handle form submission
app.post("/registerform", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    address,
    city,
    postCode,
    phone,
    password,
  } = req.body;

  try {
    // Insert data into MySQL database with plain text password
    const sql = `INSERT INTO registerform (firstName, lastName, email, address, city, postCode, phone, password) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      firstName,
      lastName,
      email,
      address,
      city,
      postCode,
      phone,
      password, // Store plain text password
    ];

    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error inserting data: " + err.stack);
        res.status(500).send("Error inserting data");
        return;
      }
      console.log("Data inserted successfully");
      res.status(200).send("Form submitted successfully");
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).send("Error inserting data");
  }
});

// Route to handle login
app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt:", email, password);

  try {
    // Check if the email exists in the database
    const sql = "SELECT * FROM registerform WHERE email = ?";
    connection.query(sql, [email], async (err, results) => {
      if (err) {
        console.error("Error retrieving user:", err);
        res.status(500).send("Error retrieving user");
        return;
      }

      if (results.length === 0) {
        console.log("Email not found");
        res.status(401).json({ success: false, message: "Email not found" });
        return;
      }

      // Compare passwords
      const user = results[0];
      console.log("User found:", user);

      if (password === user.password) {
        // Passwords match, login successful
        console.log("Login successful");
        res.status(200).json({ success: true, message: "Login successful" });
      } else {
        // Passwords do not match
        console.log("Incorrect password");
        res.status(401).json({ success: false, message: "Incorrect password" });
      }
    });
    
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Error logging in");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
