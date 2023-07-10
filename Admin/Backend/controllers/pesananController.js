const { Pesanan, Menu } = require("../models");

// Mendapatkan semua pesanan
const getAllPesanan = async (req, res) => {
  try {
    const pesanan = await Pesanan.findAll({
      include: {
        model: Menu,
        attributes: ["nama_menu", "harga"],
      },
    });

    res.status(200).json(pesanan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// Membuat pesanan baru
const createPesanan = async (req, res) => {
  const { no_meja, id_menu, quantity } = req.body;

  try {
    const pesanan = await Pesanan.create({
      no_meja,
      id_menu,
      quantity,
    });

    res.status(201).json(pesanan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// Mengupdate pesanan berdasarkan ID
const updatePesanan = async (req, res) => {
  const { id } = req.params;
  const { no_meja, id_menu, quantity } = req.body;

  try {
    const pesanan = await Pesanan.findByPk(id);

    if (!pesanan) {
      return res.status(404).json({ message: "Pesanan tidak ditemukan" });
    }

    pesanan.no_meja = no_meja;
    pesanan.id_menu = id_menu;
    pesanan.quantity = quantity;

    await pesanan.save();

    res.status(200).json(pesanan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

// Menghapus pesanan berdasarkan ID
const deletePesanan = async (req, res) => {
  const { id } = req.params;

  try {
    const pesanan = await Pesanan.findByPk(id);

    if (!pesanan) {
      return res.status(404).json({ message: "Pesanan tidak ditemukan" });
    }

    await pesanan.destroy();

    res.status(200).json({ message: "Pesanan berhasil dihapus" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

const getPesananByNoMeja = async (req, res) => {
  const { no_meja } = req.params;

  try {
    const pesanan = await Pesanan.findAll({
      include: {
        model: Menu,
        attributes: ["nama_menu", "harga"],
      },
      where: {
        no_meja: no_meja,
      },
    });

    res.status(200).json(pesanan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

module.exports = {
  getAllPesanan,
  createPesanan,
  updatePesanan,
  deletePesanan,
  getPesananByNoMeja,
};
