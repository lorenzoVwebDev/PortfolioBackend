require('dotenv').config();
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const mongoose = require('mongoose');
const connectDB = require('./config/dbconfig'); 
const errorHandler = require('./middleware/errorHandler');
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
 
// custom middleware logger
app.use(logger); 

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));
//projects static files
//rock paper scissor
app.use('/projects', express.static(path.join(__dirname, '/projects')));
//templates & resume
app.use('/templatesresume', express.static(path.join(__dirname, '/excel&powerpointfiles')));

// routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/contacts', require('./routes/api/contacts'));
app.use('/projects', require('./routes/api/projects'))
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

mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

//curl ifconfig.co

