require("dotenv").config();
const express = require("express");
const {Pool} = require("pg");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//POSTGRESQL Connections...

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME, 
    port: process.env.DB_PORT, 
});

//GET all projects
app.get("/projects", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM completed_projects");
        res.json(result.rows);
    }
    catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));