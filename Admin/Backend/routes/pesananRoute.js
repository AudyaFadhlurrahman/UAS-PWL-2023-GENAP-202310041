const express = require("express");
const router = express.Router();
const pesananController = require("../controllers/pesananController");

// Mendapatkan semua pesanan
router.get("/", pesananController.getAllPesanan);

// Membuat pesanan baru
router.post("/", pesananController.createPesanan);

// Mengupdate pesanan berdasarkan ID
router.put("/:id", pesananController.updatePesanan);

// Menghapus pesanan berdasarkan ID
router.delete("/:id", pesananController.deletePesanan);

router.get("/:no_meja", pesananController.getPesananByNoMeja);

module.exports = router;
