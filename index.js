const express = require("express");
const route = express();
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost/todoexpress", { useNewUrlParser: true });

route.set("view engine", "pug");
route.use(bodyParser.urlencoded({ extended: false }));
route.use(bodyParser.json());

const todoSchema = new mongoose.Schema({
  name: String,
  description:String,
  status: {type:Boolean, default:false},
});

const TodoModel = mongoose.model("Todo", todoSchema);


const getTodo = async () => {
  return await TodoModel.find({});
};

const callback = (error, result)=>{
    console.log(error, result);
}
route.get("/detail/:taskid?", async (request, response) => {
    const { params } = request;
    const taskList = await getTodo();
    let task = null;
    if (params.taskid !== undefined) {
      task = await taskList.find((e) => e._id == params.taskid);
      response.render("details", { task });
    } else {
      response.render("detail", { tasks: taskList });
    }
  });


route.get("/", async (req, res) => {
  const todolist = await getTodo()
    .then((response) => {
      console.log(response);
      res.render("index", { todo: response });
    })
    .catch((err) => console.log(err));
});

route.post("/", async (req, res) => {
  const addTodo = new TodoModel({ name: req.body.task, description:req.body.description });
  await addTodo.save((err, todo) => {
    console.log("saved");
  });
  console.log(addTodo);
  res.redirect("/");
});


route.post("/details", async (req, res) => {
    await TodoModel.updateOne({_id:req.body.id},{name:req.body.task, description:req.body.description},callback
        )
    res.redirect("/");
  });

  route.get("/:taskid?/del", async (req, res) => {
    const { params } = req;
    await TodoModel.deleteOne({_id:params.taskid},callback
        )
    res.redirect("/");
  });


  route.get("/:taskid?/done", async (req, res) => {
    const { params } = req;
    await TodoModel.updateOne({_id:params.taskid},{status:true},callback
        )
    res.redirect("/");
  });

  route.get("/:taskid?/undone", async (req, res) => {
    const { params } = req;
    await TodoModel.updateOne({_id:params.taskid},{status:false},callback
        )
    res.redirect("/");
  });
  

route.listen(port, () => {
  console.log(`Example route listening at http://localhost:${port}`);
});
