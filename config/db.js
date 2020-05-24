const MongoClient = require('mongodb').MongoClient;
const dbName = 'indian_banks';
let banksCollection;
const connectDB = async () => {
	const client = await MongoClient.connect(process.env.MONGO_URI, {
		useNewUrlParser: true
	});
	const db = client.db(dbName);
	banksCollection = db.collection('banks');
	console.log('MongoDB Connected');
	return banksCollection;
};
module.exports = { connectDB, banksCollection: () => banksCollection };
