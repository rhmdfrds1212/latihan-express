nama : String
npm : String / required;
email : String / required;
tanggal_lahir : Date;
aktif : Boolean;

const schema = new mongoose.Schema({ name: String, size: String });
const Tank = mongoose.model('Tank', schema);

let mongoose = require("mongoose");

let schemaMhs = new mongoose.Schema({
  nama: String,
  npm: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  tanggal_lahir: {
    type: Date,
  },
  aktif: Boolean,
});

//create Model from Schema
mongoose.model("Mahasiswa", schemaMhs);