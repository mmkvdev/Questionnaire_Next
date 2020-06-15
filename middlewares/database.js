import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export async function setUp(db) {
    db.collection('users').createIndex({ email: 1 }, { unique: true });
}
async function database(req, res, next) {
    if (!client.isConnected()) {
        await client.connect()
    }
    req.dbClient = client
    req.db = client.db(process.env.DB_NAME);
    await setUp(req.db);
    return next();
}

export default database;
