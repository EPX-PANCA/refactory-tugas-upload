const UserModel = require("../models/user");
const fs = require("fs");
const path = require("path");
class UserController {


  static async listTodo (req, res) {
    const list = await UserModel.find({})
    res.render('users/index', { todo: list })
  }
  

  static async saveTodo (req, res) {
    const { params, file, body } = req;
    const user = new UserModel({ title: body.title, description:body.description, photo: file.filename });
    await user.save()
    res.redirect("/users");
  }



  static async delTodo (req, res) {
    let dir = path.join(__dirname, './../public/images/uploads/')
    const photo = await UserModel.findById({ _id: req.params.id })
    await UserModel.findByIdAndDelete({ _id: req.params.id})
    let unlink = dir + photo.photo;
    fs.unlinkSync(unlink)
    res.redirect('/users')
  }



  static async detailTodo (req, res) {
    let dir = path.join(__dirname, './../public/images/uploads/')
    const list = await UserModel.findById({ _id: req.params.id})
    res.render('users/detail', { todo:list})
  }

  static async editTodo(req, res){
    const { params, file, body } = req;
    
    let dir = path.join(__dirname, './../public/images/uploads/')
    const photo = await UserModel.findById({_id:body.id})
    let unlink = dir + photo.photo;
    fs.unlinkSync(unlink)

    await UserModel.updateOne({_id:body.id},{ title: body.title, description:body.description, photo: file.filename });
    res.redirect('/users')
  }



  static async doneTodo (req, res) {

    await UserModel.updateOne({_id:req.params.id},{ status:true });
    res.redirect('/users')
    
  }


  static async undoneTodo (req, res) {
    await UserModel.updateOne({_id:req.params.id},{ status:false });
    res.redirect('/users')
    
  }

  

  



}

module.exports = UserController;
