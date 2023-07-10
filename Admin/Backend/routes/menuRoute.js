const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

// Route untuk mengambil semua menu
router.get("/", menuController.getAllMenu);

// Route untuk membuat menu baru
router.post("/", menuController.createMenu);

// Route untuk mengupdate menu berdasarkan ID
router.put("/:id", menuController.updateMenu);

// Route untuk menghapus menu berdasarkan ID
router.delete("/:id", menuController.deleteMenu);

module.exports = router;
