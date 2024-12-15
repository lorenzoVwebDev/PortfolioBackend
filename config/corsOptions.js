const whitelist = [
    'https://www.lorenzo-viganego.com', 
    'https://lorenzo-viganego.com', 'http://192.168.1.101', 'https://192.168.1.101', 'http://127.0.0.1:5500'
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
    allowedHeaders: ['project-type'],
    exposedHeaders: ['project-type'],
    credentials: true,
    maxAge: 10000,
    optionsSuccessStatus: 200
}


//hello
module.exports =  corsOptions;

