const { user, post } = require("../models");
const comment = require("../models/comment");

const response = {
  status: true,
  message: "Data OK",
  data: [],
};

class UserController {

  static async saveUser(req, res) {
    const { body } = req;

    try {
      const save = await user.create({
        username: body.username,
        password: body.password,
        salt: body.salt,
        email: body.email,
        photo: body.photo,
      });
      response.message = "sukses simpan data";
      response.data = [];
      res.status(201).json(response);
    } catch (error) {
      response.status = false;
      response.message = error.message;
      res.status(400).json(response);
    }
  }


  static async updateUser(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      await user.update({
        username: body.username,
        password: body.password,
        salt: body.salt,
        email: body.email,
        photo: body.photo,
      },{where:{id:id}});
      response.message = `sukses update data user dengan id : ${id}`;
      response.data = [];
      res.status(201).json(response);
    } catch (error) {
      response.status = false;
      response.message = error.message;
      response.data = [];
      res.status(400).json(response);
    }
  }

  static async getUser(req, res) {
    const { id } = req.params;
    const userdetail = await user.findByPk(id, {
      include: post,
    });
    try {
      if (!userdetail) throw new Error("User not found")
      response.data = userdetail;
      response.status = "success";
      response.message = "Data found";
      res.json(response);
    } catch (error) {
      response.message = error.message;
      response.data = [];
      response.status = "fail";
      res.status(404).json(response);
    }
  }

  static async getUserAll(req, res) {
    const userdetail = await user.findAll({
      include: post,
    });
    try {
      if (!userdetail) throw new Error("User not found")
      response.data = userdetail;
      response.status = "success";
      response.message = "Data Found";
      res.json(response);
    } catch (error) {
      response.message = error.message;
      response.data = [];
      response.status = "fail";
      res.status(404).json(response);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
  
      await user.destroy({where:{id:id}})
      response.message = `sukses hapus data user dengan id : ${id}`;
      response.data = [];
      res.status(201).json(response);
    } catch (error) {
      response.status = false;
      response.message = error.message;
      response.data = [];
      res.status(400).json(response);
    }
  }


}




module.exports = UserController;
