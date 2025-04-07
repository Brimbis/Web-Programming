require("dotenv").config();
const express = require("express");
const {Pool} = require("pg");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//POSTGRESQL Connections...

// Pool for "personal_information" database
const personalInfoPool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_INFO,
    port: process.env.DB_PORT,
});

  // Pool for "hobbies" database
const hobbiesPool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_HOBBIES,
    port: process.env.DB_PORT,
});

//GET all projects
app.get("/info", async (req, res) => {
    try {
        const result = await personalInfoPool.query("SELECT * FROM info");
        res.json(result.rows);
    }
    catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

app.get("/hobbies", async (req, res) => {
    try {
        const result = await hobbiesPool.query("SELECT * FROM hobbies");
        res.json(result.rows);
    }
    catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));