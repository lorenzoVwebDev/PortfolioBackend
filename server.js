require('dotenv').config();
const bcrypt = require('bcrypt')
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
 
connectDB(corsOptions);
/* // custom middleware logger
app.use(logger);  */

// Cross Origin Resource Sharing
/* app.use((req, res) => {
    console.log(req.origin)
}) */

app.use(cors(/* corsOptions */));


app.use(express.json());
// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 


// serve static files
app.use('/', express.static(path.join(__dirname, 'public')));
//projects middlware
//app.use('/projects/sendcalculator/', express.static(path.join(__dirname, 'projects', 'Calculator')));
app.use('/projects/sendcalculator', require('./routes/projects/calculator/calculator.js'))
app.use('/projects/tictactoe/', require('./routes/projects/tictactoe/tictactoe.js'));
app.use('/projects/rockpaperscissor/',  require('./routes/projects/rockPaperScissors/rockPaperScissors.js'));
app.use('/projects/todolist/', require('./routes/projects/todolist/todolist.js'));
app.use('/projects/loginpage/', require('./routes/projects/loginpage/loginpage.js'));
app.use('/projects/animalcards/', require('./routes/projects/animalcards/animalcards.js'));
//projects middlware


// routes
app.use('/dummylogin', require(path.join(__dirname, 'routes', 'api', 'dummylogin.js')))
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

