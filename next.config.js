require('dotenv').config();

module.exports = {
    env: {
        MONGO_URI: process.env.MONGO_URI,
        DB_NAME: process.env.DB_NAME
    },
};