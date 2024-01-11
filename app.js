const express = require("express");
const {
  getAllTodolist,
  createTodolist,
  updateTodolist,
  deleteTodolist,
} = require("./controller/todolistController");

const app = express();

app.use(express.json());

const router = express.Router();

router.route("/todolist").get(getAllTodolist).post(createTodolist);

router.route("/todolist/:id").put(updateTodolist).delete(deleteTodolist);

app.use("/api", router);

module.exports = app;
