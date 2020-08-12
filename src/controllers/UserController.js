const { user, post, comment } = require("../models");
require('dotenv').config();
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const response = {
  status: true,
  message: "Data OK",
  data: [],
};

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

let dir = path.join(__dirname, '../public/images/')
let url = null;
class UserController {

  static async saveUser(req, res) {
    const { file, body } = req;

    try {
      const saveUser = {
        username: body.username,
        password: body.password,
        salt: body.salt,
        email: body.email,
        photo: file.filename
      }
const up = dir + saveUser.photo

const a = await cloudinary.uploader.upload(up)

   const result =  await user.create({
    username: body.username,
    password: body.password,
    salt: body.salt,
    email: body.email,
    photo: a.secure_url
  })
     
     response.message = "sukses simpan data";
     response.data = result
     fs.unlinkSync(up)
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
      const a = await user.findByPk(id)
      if(a == undefined) throw new Error("id not found")
         await user.update({
        username: body.username,
        password: body.password,
        salt: body.salt,
        email: body.email,
        photo: body.photo,
      },{where:{id:id}});
      response.message = `sukses update data user dengan id : ${id}`;
      response.data =  await user.findByPk(id);
      res.status(201).json(response);
    } catch (error) {
      response.status = false;
      response.message = error.message;
      response.data = [];
      res.status(400).json(response);
    }
  }

  static async getUser(req, res) {
    const { id } = req.params;///bisa pakai findOne
    const userdetail = await user.findByPk(id, {
      include: [{model:post},{model:comment}]
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
      include: [{model:post},{model:comment}]
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
      const a = await user.findByPk(id)
      if(a == undefined) throw new Error("id not found")
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
