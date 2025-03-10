const express = require("express");
const app = express();

// Sample Data 
const users = [
    {id: 1, name:"Alice"}, 
    {id: 2, name:"Bob"}, 
    {id: 3, name:"Chuck"}, 
];

const products = [
    {id:1, category:"tech"}, 
    {id:2, category:"food"}, 
    {id:3, category:"affirmations"}, 
    {id:4, category:"tech"}, 
];

const tech = [
    {id:1, name:"Laptop", price:999}, 
    {id:2, name:"Phone", price:699}, 
    {id:3, name:"Printer", price:499}, 
];

const food = [
    {id:1, name:"Apple", price:3.14}, 
    {id:2, name:"Pear", price:4.26}, 
    {id:3, name:"Banana", price:5.13}, 
];

const affirmations = [
    {id:1, phrase: "You're doing great today!"}, 
    {id:2, phrase: "You're stronger than you think."}, 
    {id:3, phrase: "Be kind to someone today."}, 
];

const vehicles = [
    {id:1, model:"Toyota", name:"Camry"}, 
    {id:2, model:"Chevrolet", name:"Silverado"}, 
];

// Routing...
app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/products/tech", (req, res) => {
    res.json(tech);
});

app.get("/products/food", (req, res) => {
    res.json(food);
});

app.get("/products/affirmations", (req, res) => {
    res.json(affirmations);
});

app.get("/products/vehicles", (req, res) => {
    res.json(vehicles);
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});