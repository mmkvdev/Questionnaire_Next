require('dotenv').config();

module.exports = {
    env: {
        MONGO_URI: process.env.MONGO_URI,
        DB_NAME: process.env.DB_NAME,
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
        AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
        AUTH0_CLIENT_ID:process.env.AUTH0_CLIENT_ID,
        AUTH0_CLIENT_SECRET:process.env.AUTH0_CLIENT_SECRET
    },
};
