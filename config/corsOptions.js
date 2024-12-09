const whitelist = [
    'http://192.168.1.101',
    'http://127.0.0.1:3000',
    'http://localhost:3000', 'https://lorenzovwebdev.github.io', 'https://lorenzo-viganego.com', 'https://www.lorenzo-viganego.com'
];

const corsOptions = {
    origin: (origin, callback) => {
        if (origin === undefined || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'], // Allowing these methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Ensure you're allowing the required headers
    optionsSuccessStatus: 200
}
//hello
module.exports = corsOptions;
