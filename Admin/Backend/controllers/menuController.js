const { Menu } = require("../models");

// Controller untuk mengambil semua menu
const getAllMenu = async (req, res) => {
  try {
    const menus = await Menu.findAll();
    res.status(200).json(menus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// Controller untuk membuat menu baru
const createMenu = async (req, res) => {
  const { nama_menu, stock, harga } = req.body;

  try {
    // Buat menu baru dengan data yang diterima
    const newMenu = new Menu({ nama_menu, stock, harga });

    // Simpan menu ke database
    newMenu.save((err, savedMenu) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Terjadi kesalahan server" });
      }

      res.status(201).json(savedMenu);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// Controller untuk mengupdate menu berdasarkan ID
const updateMenu = async (req, res) => {
  const { id } = req.params;
  const { nama_menu, stock, harga } = req.body;

  try {
    const menu = await Menu.findByPk(id);
    if (!menu) {
      return res.status(404).json({ message: "Menu tidak ditemukan" });
    }

    // Update atribut menu
    menu.nama_menu = nama_menu;
    menu.stock = stock;
    menu.harga = harga;

    // Simpan perubahan
    await menu.save();

    res.status(200).json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// Controller untuk menghapus menu berdasarkan ID
const deleteMenu = async (req, res) => {
  const { id } = req.params;

  try {
    const menu = await Menu.findByPk(id);
    if (!menu) {
      return res.status(404).json({ message: "Menu tidak ditemukan" });
    }

    // Hapus menu
    await menu.destroy();

    res.status(200).json({ message: "Menu berhasil dihapus" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

module.exports = {
  getAllMenu,
  createMenu,
  updateMenu,
  deleteMenu,
};
