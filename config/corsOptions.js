const whitelist = [
    'https://www.lorenzo-viganego.com/', 
    'https://lorenzo-viganego.com/', 'http://example.com'
];

const corsOptions = {
    origin: (origin, callback) => {
        console.log(origin)
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },

    optionsSuccessStatus: 200
}
//hello
module.exports = { corsOptions };