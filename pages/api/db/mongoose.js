const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;

db.on('error', (e) => {
    logger.error(e.toString(), true);
    logger.error(e.stack, true);
    process.exit(999);
});

db.once('open', async function () {
    console.info('DB Connected Successfully');
});

module.exports = mongoose;
