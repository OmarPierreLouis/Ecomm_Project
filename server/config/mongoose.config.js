const mongoose = require("mongoose"); //Mongoose connection
const db_name = "Ecomm_db";

// mongodb+srv://root:root@merncluster.1essl.mongodb.net/${db_name}?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://root:root@react-ecomm.jq0a97u.mongodb.net/?retryWrites=true&w=majority`,  {       useNewUrlParser: true,
        useUnifiedTopology: true,})
    .then(() => console.log("Established a connection to the database"))
    .catch((err) =>console.log("Something went wrong when connecting to the database ", err));
