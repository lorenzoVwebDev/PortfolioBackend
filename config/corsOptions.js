const whitelist = [
];

const corsOptions = {
    origin: (origin, callback) => {
        console.log(origin);
        if (whitelist.indexOf(origin) !== -1) {

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
