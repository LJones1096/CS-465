const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1/travlr';

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI), 1000);
};

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

connect();

const gracefulShutdown = async (msg) => {
    await mongoose.connection.close();
    console.log(`Mongoose disconnected through ${msg}`);
};

process.on('SIGINT', async () => {
    await gracefulShutdown('app termination');
    process.exit(0);
});

process.on('SIGTERM', async () => {
    await gracefulShutdown('app shutdown');
    process.exit(0);
});

require('./travlr');
module.exports = mongoose;