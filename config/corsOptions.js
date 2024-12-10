const whitelist = [
    'https://www.lorenzo-viganego.com', 
    'https://lorenzo-viganego.com', 'http://example.com', 'http://192.168.1.101', 'http://192.168.1.1', 'http://151.27.29.178', '172.232.217.98'
];

let frontend = false;

function checkIp(ip) {
    const cleanIp = ip.replace("::ffff:", "");
    console.log(cleanIp);
    if(whitelist.some((url) => url.includes(cleanIp))) {
        frontend = true;
    }
}

corsOptions = {
    origin: (origin, callback) => {
        console.log(frontend);
        if (frontend) {
            callback(null, true)
            frontend=false
        } else {
            callback(new Error('Not allowed by CORS'));
            frontend=false
        }
    },

    optionsSuccessStatus: 200
}


//hello
module.exports =  { checkIp, corsOptions};