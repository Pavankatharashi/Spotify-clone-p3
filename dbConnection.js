const mongoose = require("mongoose");

const CONNECTION_STRING = "mongodb://localhost:27017/usersauth?retryWrites=true&w=majority";

const ConnectDb = async () => {
    try{
        const connect = await mongoose.connect(CONNECTION_STRING,{
            serverSelectionTimeoutMS: 5000
        });
        console.log("Db connected");
        // console.log(connect);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = ConnectDb;
