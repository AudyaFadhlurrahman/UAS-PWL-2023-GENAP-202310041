"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    static associate(models) {}
  }
  Menu.init(
    {
      nama_menu: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      harga: DataTypes.FLOAT,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Menu",
    }
  );
  return Menu;
};
