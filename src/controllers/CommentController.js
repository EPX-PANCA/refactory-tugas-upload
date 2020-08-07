const { user, post, comment } = require("../models");


const response = {
  status: true,
  message: "Data OK",
  data: [],
};

class CommentController {

  static async saveComment(req, res) {
    const { body } = req;

    try {
      const save = await comment.create({
        content: body.content,
        status: body.status,
        userId: body.userId,
        email:body.email,
        url:body.url,
        postId:body.postId,
      });
      response.message = "sukses simpan data";
      response.data = save;
      res.status(201).json(response);
    } catch (error) {
      response.status = false;
      response.message = error.message;
      res.status(400).json(response);
    }
  }

  static async updateComment(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const a = await comment.findByPk(id)
      if(a == undefined) throw new Error("id not found")
      await comment.update({
        content: body.content,
        status: body.status,
        userId: body.userId,
        email:body.email,
        url:body.url,
        postId:body.postId,
      },{where:{id:id}});
      response.message = `sukses update data comment dengan id : ${id}`;
      response.data =  await comment.findByPk(id);
      res.status(201).json(response);
    } catch (error) {
      response.status = false;
      response.message = error.message;
      response.data = [];
      res.status(400).json(response);
    }
  }

  static async getComment(req, res) {
    const { id } = req.params;
    const commentdetail = await comment.findByPk(id, {
      include: [{model:user},{model:post}]
    });
    try {
      if (!commentdetail) throw new Error("Comment not found")
      response.data = commentdetail;
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

  static async getCommentAll(req, res) {
    const commentdetail = await comment.findAll({
      include: [{model:user},{model:post}]
    });
    try {
      if (!commentdetail) throw new Error("Comment not found")
      response.data = commentdetail;
      response.status = "success";
      response.message = "Data Founds";
      res.json(response);
    } catch (error) {
      response.message = error.message;
      response.data = [];
      response.status = "fail";
      res.status(404).json(response);
    }
    
  }

  static async deleteComment(req, res) {
    const { id } = req.params;
    try {
      const a = await comment.findByPk(id)
      if(a == undefined) throw new Error("id not found")
      await comment.destroy({where:{id:id}})
      response.message = `sukses hapus data comment dengan id : ${id}`;
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

module.exports = CommentController;
