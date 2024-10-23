var mahasiswa = require('express');
var router = mahasiswa.Router();

const mainController = require("../controllers/mahasiswa");
/* GET home page. */
router.get('/', mainController.mahasiswa);

// buat route ke halaman kontak (/kontak) dgn method get
router.get("/mahasiswa", mainController.mahasiswa);
router.get("/mahasiswa2", mainController.mahasiswa);

module.exports = router;
