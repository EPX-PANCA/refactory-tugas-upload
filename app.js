const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const rootIndex = require("./src/routes/index");
const routerUsers = require("./src/routes/users");
const routerPost = require("./src/routes/posts");
const routerComment = require("./src/routes/comments");
const routerAuth = require("./src/routes/auths");
const routeRegister = require("./src/routes/register");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());


app.use("/", rootIndex);
app.use("/users", routerUsers);
app.use("/posts", routerPost);
app.use("/comments", routerComment);
app.use("/auths", routerAuth);
app.use("/register", routeRegister);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
