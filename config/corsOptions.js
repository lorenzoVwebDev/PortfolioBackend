const whitelist = [
    'https://www.lorenzo-viganego.com', 
    'https://lorenzo-viganego.com', 'http://example.com', 'http://192.168.1.101', 'http://192.168.1.1', 'http://151.27.29.178' 
];

const corsOptions = {
    origin: (origin, callback) => {
        console.log(origin)
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },

    optionsSuccessStatus: 200
}
//hello
module.exports = corsOptions;