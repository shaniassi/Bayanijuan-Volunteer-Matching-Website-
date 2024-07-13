const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 5050;

// MySQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wdproj",
  port: 3307,
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

// Route to handle form submission for registerform
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

// Route to handle form submission for organizationform
app.post("/organizationform", async (req, res) => {
  const {
    organizationName,
    email,
    contactPersonName,
    contactPersonTitle,
    phone,
    password,
  } = req.body;

  try {
    // Insert data into MySQL database with plain text password
    const sql = `INSERT INTO organizationform (organizationName, email, contactPersonName, contactPersonTitle, phone, password) 
                 VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [
      organizationName,
      email,
      contactPersonName,
      contactPersonTitle,
      phone,
      password, // Store plain text password
    ];

    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error inserting organization data: " + err.stack);
        res.status(500).send("Error inserting organization data");
        return;
      }
      console.log("Organization data inserted successfully");
      res.status(200).send("Organization registration submitted successfully");
    });
  } catch (error) {
    console.error("Error inserting organization data:", error);
    res.status(500).send("Error inserting organization data");
  }
});

// Route to fetch new opportunities
app.get("/newopportunities", (req, res) => {
  const { keyword, cause, skills } = req.query;

  let query =
    "SELECT OrgName, OrgAddress, OppTitle, OrgDescription, datePosted, causeArea, skills FROM newopportunities WHERE 1=1";
  const queryParams = [];

  if (keyword) {
    query += " AND (OppTitle LIKE ? OR OrgDescription LIKE ?)";
    queryParams.push(`%${keyword}%`, `%${keyword}%`);
  }
  if (cause) {
    query += " AND causeArea = ?";
    queryParams.push(cause);
  }
  if (skills) {
    query += " AND skills LIKE ?";
    queryParams.push(`%${skills}%`);
  }

  // Debugging: Log the query and parameters
  console.log("Executing query:", query);
  console.log("With parameters:", queryParams);

  connection.query(query, queryParams, (err, results) => {
    if (err) {
      console.error("Error fetching new opportunities:", err);
      res.status(500).send("Error fetching new opportunities");
      return;
    }
    res.json(results);
  });
});

// Route to fetch upcoming opportunities
app.get("/upcomingopportunities", (req, res) => {
  const { keyword, cause, skills } = req.query;

  let query =
    "SELECT OrgName, OrgAddress, OppTitle, OrgDescription, datePosted, causeArea, skills FROM upcomingopportunities WHERE 1=1";
  const queryParams = [];

  if (keyword) {
    query += " AND (OppTitle LIKE ? OR OrgDescription LIKE ?)";
    queryParams.push(`%${keyword}%`, `%${keyword}%`);
  }
  if (cause) {
    query += " AND causeArea = ?";
    queryParams.push(cause);
  }
  if (skills) {
    query += " AND skills LIKE ?";
    queryParams.push(`%${skills}%`);
  }

  // Debugging: Log the query and parameters
  console.log("Executing query:", query);
  console.log("With parameters:", queryParams);

  connection.query(query, queryParams, (err, results) => {
    if (err) {
      console.error("Error fetching upcoming opportunities:", err);
      res.status(500).send("Error fetching upcoming opportunities");
      return;
    }
    res.json(results);
  });
});

// Route to fetch popular opportunities
app.get("/popularopportunities", (req, res) => {
  const { keyword, cause, skills } = req.query;

  let query =
    "SELECT OrgName, OrgAddress, OppTitle, OrgDescription, datePosted, causeArea, skills FROM popularopportunities WHERE 1=1";
  const queryParams = [];

  if (keyword) {
    query += " AND (OppTitle LIKE ? OR OrgDescription LIKE ?)";
    queryParams.push(`%${keyword}%`, `%${keyword}%`);
  }
  if (cause) {
    query += " AND causeArea = ?";
    queryParams.push(cause);
  }
  if (skills) {
    query += " AND skills LIKE ?";
    queryParams.push(`%${skills}%`);
  }

  // Debugging: Log the query and parameters
  console.log("Executing query:", query);
  console.log("With parameters:", queryParams);

  connection.query(query, queryParams, (err, results) => {
    if (err) {
      console.error("Error fetching popular opportunities:", err);
      res.status(500).send("Error fetching popular opportunities");
      return;
    }
    res.json(results);
  });
});

// Route to fetch opportunities based on search criteria
app.get("/findopportunities", async (req, res) => {
  const { keyword, cause, skills, category } = req.query;

  let query =
    "SELECT OrgName, OrgAddress, OppTitle, OrgDescription, datePosted, causeArea, skills, category FROM findopportunities WHERE 1=1";
  const queryParams = [];

  if (keyword) {
    query += " AND (OppTitle LIKE ? OR OrgDescription LIKE ?)";
    queryParams.push(`%${keyword}%`, `%${keyword}%`);
  }
  if (cause) {
    query += " AND causeArea = ?";
    queryParams.push(cause);
  }
  if (skills) {
    query += " AND skills LIKE ?";
    queryParams.push(`%${skills}%`);
  }

  if (category) {
    query += " AND category = ?";
    queryParams.push(category);
  }

  // Debugging: Log the query and parameters
  console.log("Executing query:", query);
  console.log("With parameters:", queryParams);

  connection.query(query, queryParams, (err, results) => {
    if (err) {
      console.error("Error fetching opportunities:", err);
      res.status(500).send("Error fetching opportunities");
      return;
    }
    res.json(results);
  });
});

// Route to handle login (volunteer or organization)
app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt:", email, password);

  try {
    // Check if the email exists in the volunteer (registerform) database
    let sql = "SELECT * FROM registerform WHERE email = ?";
    connection.query(sql, [email], async (err, results) => {
      if (err) {
        console.error("Error retrieving volunteer:", err);
        res.status(500).send("Error retrieving volunteer");
        return;
      }

      if (results.length > 0) {
        // Compare passwords
        const user = results[0];
        console.log("Volunteer found:", user);

        if (password === user.password) {
          // Passwords match, login successful
          console.log("Volunteer Login successful");
          return res.status(200).json({
            userType: "volunteer",
            success: true,
            message: "Login successful",
          });
        } else {
          // Passwords do not match
          console.log("Volunteer Incorrect password");
          return res
            .status(401)
            .json({ success: false, message: "Incorrect password" });
        }
      } else {
        // Check if the email exists in the organization (organizationform) database
        sql = "SELECT * FROM organizationform WHERE email = ?";
        connection.query(sql, [email], async (err, results) => {
          if (err) {
            console.error("Error retrieving organization:", err);
            res.status(500).send("Error retrieving organization");
            return;
          }

          if (results.length > 0) {
            // Compare passwords
            const user = results[0];
            console.log("Organization found:", user);

            if (password === user.password) {
              // Passwords match, login successful
              console.log("Organization Login successful");
              return res.status(200).json({
                userType: "organization",
                success: true,
                message: "Login successful",
              });
            } else {
              // Passwords do not match
              console.log("Organization Incorrect password");
              return res
                .status(401)
                .json({ success: false, message: "Incorrect password" });
            }
          } else {
            // Email not found in either volunteer or organization database
            console.log("Email not found");
            return res
              .status(401)
              .json({ success: false, message: "Email not found" });
          }
        });
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
