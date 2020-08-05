const UserModel = require("../models/user");
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
    await UserModel.findByIdAndDelete({ _id: req.params.id})
    res.redirect('/users')
  }



  static async detailTodo (req, res) {
    const list = await UserModel.findById({ _id: req.params.id})
    res.render('users/detail', { todo:list})
   // const list = await UserModel.findById({ _id: req.params.id})
    await TodoModel.updateOne({_id:req.body.id},{ title: body.title, description:body.description, photo: file.filename });
    
  }

  

  



}

module.exports = UserController;
