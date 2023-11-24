const express = require('express'); // Import the 'express' module
const app = express(); // Create an Express app
const server = require('http').createServer(app); // Import the 'http' module
const cors = require('cors'); // Import the 'cors' module
const db = require('./models'); // Import the 'db' object

const messageRouter = require('./routers/messageRouter');

app.use(cors());
app.use("/messages", messageRouter); 

const initializeSocketIO = require('./websocket'); // Import the 'initializeSocketIO' function
initializeSocketIO(server); // Pass the 'server' object to the 'initializeSocketIO' function

db.sequelize.sync().then(() => { 
  server.listen(5000, () => { 
    console.log(`Server listening on port 5000`); 
  });
});
