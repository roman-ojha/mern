const mongoose = require("mongoose");

// now here we have to pass the key of the path of database value
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    // to get through deprecation warning you have to write this:
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log(err);
  });
