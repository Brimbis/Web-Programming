// Importing Modules...
const express = require('express');
const logger = require('./Middleware/logger');
const apiRoutes = require('./Routes/api');

const app = express();
const PORT = 3000;

// Apply Middleware...
app.use(express.json());
app.use(logger);

// Mount Routes...
app.use('/api', apiRoutes);

// Error Handling...
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send({error: 'Internal Server Error'});
});

// Start Server...
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}/`);
});