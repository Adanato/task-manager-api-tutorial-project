const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://adam:tOgbskYfq0efe79m@cluster0.dzp1wgd.mongodb.net/Cluster0?retryWrites=true&w=majority";

function connectDB(url) {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}

module.exports = connectDB;
