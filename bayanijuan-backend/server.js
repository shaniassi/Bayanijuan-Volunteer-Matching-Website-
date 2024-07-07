const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 5010; // Choose your desired port

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
app.post("/registerform", (req, res) => {
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

  // Insert data into MySQL database
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
    password,
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
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
