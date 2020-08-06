"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.comment);
    }
  }
  post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      tags: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM,
        values: ["active", "deactive"],
      },
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
