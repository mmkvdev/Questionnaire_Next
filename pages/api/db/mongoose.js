const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://MMK:MMK-mrrobot@7997@cluster0-d4rmy.mongodb.net/Questionnaire?retryWrites=true&w=majority",
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