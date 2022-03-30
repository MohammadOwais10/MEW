const mongoose = require("mongoose");
// mongoose.connect(`mongodb://localhost/${env.db}`);

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  });
  // .catch((err) => {  --> this catch error handle by "Unhandled Promise Rejection"
  //   console.log(err);
  // });
};

module.exports = connectDatabase;
