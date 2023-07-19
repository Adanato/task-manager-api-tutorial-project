const mongoose = require("mongoose");

const connectionString = ``;

function connectDB(url) {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}

module.exports = connectDB;
