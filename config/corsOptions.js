//IMPORTANT: add http://127.0.0.1:5501 to the white list to develop with live server
const whitelist = [
    'https://www.lorenzo-viganego.com', 
    'https://lorenzo-viganego.com', 'https://saladmaker.lorenzo-viganego.com', 'https://www.saladmaker.lorenzo-viganego.com', 'https://gameoflife.lorenzo-viganego.com', 'https://www.gameoflife.lorenzo-viganego.com', 'https://todolist.lorenzo-viganego.com/', 'http://responsivemenu.lorenzo-viganego.com/', 'https://responsivemenu.lorenzo-viganego.com/' //192.168.1.101', 'https://192.168.1.101', 'http://127.0.0.1:5501'  */
];

let frontend = false;

/* function checkIp(ip) {
    const cleanIp = ip.replace("::ffff:", "");
    if(whitelist.some((url) => url.includes(cleanIp))) {
        frontend = true;
    }
} */

corsOptions = {
    origin: (origin, callback) => {
        console.log(origin)
        if (whitelist.indexOf(origin) != -1) {
            callback(null, true)
/*             frontend=false */
        } else {
            callback(new Error('Not allowed by CORS'));
/*             frontend=false */
        }
    },
    allowedHeaders: ['project-type','Content-type'],
    exposedHeaders: ['project-type', 'Content-type'],
    credentials: true,
    maxAge: 10000,
    optionsSuccessStatus: 200
}


//hello
module.exports =  corsOptions;

