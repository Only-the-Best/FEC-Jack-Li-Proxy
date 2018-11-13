const mongoose = require('mongoose');
const mongoUri = '';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
module.exports = db;
