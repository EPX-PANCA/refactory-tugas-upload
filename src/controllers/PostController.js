const {user, post, comment} = require("../models");

const response = {
  status: true,
  message: "Data OK",
  data: [],
};

class PostController {

  static async savePost(req, res) {
    const { body } = req;

    try {
      const save = await post.create({
        title: body.title,
        content: body.content,
        tags: body.tags,
        status: body.status,
        userId: body.userId
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

  static async updatePost(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const a = await user.findByPk(id)
      if(a == undefined) throw new Error("id not found")
      await post.update({
        title: body.title,
        content: body.content,
        tags: body.tags,
        status: body.status,
        userId: body.UserId
      },{where:{id:id}});
      response.message = `sukses update data post dengan id : ${id}`;
      response.data = [];
      res.status(201).json(response);
    } catch (error) {
      response.status = false;
      response.message = error.message;
      response.data = [];
      res.status(400).json(response);
    }
  }

  static async getPost(req, res) {
    const { id } = req.params;
    const postdetail = await post.findByPk(id, {
      include: [{model:user},{model:comment}]
    });
    try {
      if (!postdetail) throw new Error("Post not found")
      response.data = postdetail;
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

  static async getPostAll(req, res) {
    const postdetail = await post.findAll({
      include: [{model:user},{model:comment}]
    });
    try {
      if (!postdetail) throw new Error("Post not found")
      response.data = postdetail;
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

  static async deletePost(req, res) {
    const { id } = req.params;
    try {
      const a = await user.findByPk(id)
      if(a == undefined) throw new Error("id not found")
      await post.destroy({where:{id:id}})
      response.message = `sukses hapus data post dengan id : ${id}`;
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

module.exports = PostController;
