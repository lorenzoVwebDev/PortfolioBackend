require('dotenv').config();
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions.js');
const { logger } = require('./middleware/logEvents');
const mongoose = require('mongoose');
//utils
const connectDB = require('./config/dbconfig'); 
const errorHandler = require('./middleware/errorHandler');
const { staticMiddlewares } = require('./middleware/staticFileGiver.js')
const https = require('https');
const hostname = 'lorenzo-viganego.com'
const PORT = process.env.PORT || 3000;

//https
/* const httpsOptions = {
    cert: fs.readFileSync('./httpscertification/lorenzo-viganego_com.crt'),
    ca: fs.readFileSync('./httpscertification/lorenzo-viganego_com.ca-bundle'),
    key: fs.readFileSync('./httpscertification/private.key')
};
 */
/* const httpsServer = https.createServer(httpsOptions, app); */


//connect to MongoDB
 
connectDB(); 
/* // custom middleware logger
app.use(logger);  */

// Cross Origin Resource Sharing

app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

// serve static files
app.use('/', express.static(path.join(__dirname, 'public')));
//projects middlware
app.use('/projects/sendcalculator/', express.static(path.join(__dirname, 'projects', 'Calculator')));
app.use('/projects/tictactoehtml/', express.static(path.join(__dirname, 'projects', 'tic-tac-toe')));
app.use('/projects/rockpaperscissorhtml/', express.static(path.join(__dirname, 'projects', 'rock-paper-scissor')));
app.use('/projects/todolist/', express.static(path.join(__dirname, 'projects', 'ToDoList')));
//projects middlware


// routes

app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/contacts', require('./routes/api/contacts'));
app.use('/templatesresume', require('./routes/api/resumetemplates')) 
  
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB');
})

//curl ifconfig.co

//curl ipinfo.io/ip

