const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
	} catch (err) {
		console.error(`Error: ${err.message}`.red);
		process.exit(1);
	}
};

module.exports = connectDB;
