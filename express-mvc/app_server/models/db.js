let mongoose = require("mongoose");
let dbuRI = "mongodb://localhost:27017/pawII-si5c";

mongoose.connect(dbuRI, {
    //userNEWUrlParser: true
});
mongoose.connection.on("connection",() => {
    console.log("Connected to mongoDB");

});
mongoose.connection.on("eror", (error) => {
    console.log("Connection Eror :" + error);

});
mongoose.connection.on("disconnected", () => {
    console.log("Disconnected From Mongodb");
});
// ... your db connection
//letakkan di dalam file db.js

require("./mahasiswa");