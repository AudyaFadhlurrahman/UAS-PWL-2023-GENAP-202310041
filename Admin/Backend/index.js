const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const menuRoute = require("./routes/menuRoute");
const pesananRoute = require("./routes/pesananRoute");
const fileUpload = require("express-fileupload");

// Middleware untuk mengizinkan penggunaan JSON dalam body request
app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.static("public"));

// Menggunakan route untuk auth
app.use("/auth", authRoute);

//menggunakan route untuk menu
app.use("/menu", menuRoute);

//menggunakan route untuk pesanan
app.use("/pesanan", pesananRoute);

// Endpoint root
app.get("/", (req, res) => {
  res.send("API berjalan");
});

// Menjalankan server
const port = 8000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
