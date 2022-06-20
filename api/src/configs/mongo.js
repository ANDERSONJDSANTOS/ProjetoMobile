const mongoose = require('mongoose');

//CONNECT WITH DATABASE
module.exports = async () => {
  const connectionUrl = process.env.CONNECTION_URL;
  await mongoose.connect(connectionUrl);
}