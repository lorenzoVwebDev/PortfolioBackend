const whitelist = [
    'http://127.0.0.1:5500',
    'http://localhost:3500', 'https://lorenzovwebdev.github.io', 'https://lorenzo-viganego.com', 'https://www.lorenzo-viganego.com'
];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}
//hello
module.exports = corsOptions;
