const express = require("express");
require("dotenv").config();

const app = express();
const userRouter = require("./api/users/users.router");
const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
