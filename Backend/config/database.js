const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true, // Corrected option name
    })
    .then((data) => {
      console.log(`Connected to MongoDB ${data.connection.host}`);
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = connectDatabase;
