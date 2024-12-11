const whitelist = [
    'https://www.lorenzo-viganego.com', 
    'https://lorenzo-viganego.com'
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
        if (whitelist.indexOf(origin) != -1) {
            callback(null, true)
/*             frontend=false */
        } else {
            callback(new Error('Not allowed by CORS'));
/*             frontend=false */
        }
    },

    optionsSuccessStatus: 200
}


//hello
module.exports =  corsOptions;
