const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //remove the createindex one
  });
  
  // shortcut to mongoose.connection object
const db = mongoose.connection; 
	
db.on('connected', function() { //on = adding a connection
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});