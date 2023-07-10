const { Admin } = require("../models");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cari pengguna berdasarkan email
    const admin = await Admin.findOne({ where: { email } });

    // Jika pengguna tidak ditemukan
    if (!admin) {
      return res.status(404).json({ message: "Email atau password salah" });
    }

    // Membandingkan password yang diinput dengan password yang tersimpan dalam database
    if (password !== admin.password) {
      return res.status(401).json({ message: "Email atau password salah" });
    }

    // Login berhasil
    res.status(200).json({ message: "Login berhasil", admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

const register = async (req, res) => {
  const { nama, email, alamat, password } = req.body;

  try {
    // Cek apakah pengguna dengan email yang sama sudah terdaftar
    const existingAdmin = await Admin.findOne({ where: { email } });

    // Jika pengguna dengan email tersebut sudah ada
    if (existingAdmin) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }

    // Buat pengguna baru
    const newAdmin = await Admin.create({
      nama,
      email,
      alamat,
      password,
    });

    // Registrasi berhasil
    res.status(201).json({ message: "Registrasi berhasil", admin: newAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

module.exports = {
  login,
  register,
};
