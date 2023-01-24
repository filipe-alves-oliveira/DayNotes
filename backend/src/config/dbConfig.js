const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://usuario:usuario@cluster0.qe8t0ns.mongodb.net/?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = connection;

