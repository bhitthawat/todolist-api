const data = require("../store/data");
const { randomUUID } = require("crypto");

exports.getAllTodolist = (req, res) => {
  res.send({ status: "sucess", data });
};

exports.createTodolist = (req, res) => {
  const { value } = req.body;
  data.push({ id: randomUUID(), value });
  res.send({ status: "success", data: null });
};

exports.updateTodolist = (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  const index = data.findIndex((item) => item.id == id);

  if (index == -1) {
    res
      .status(400)
      .send({ status: "error", data: null, message: "id not found" });
  }

  data[index].value = value;
  res.send({ status: "success", data: null });
};

exports.deleteTodolist = (req, res) => {
  const { id } = req.params;
  const index = data.findIndex((item) => item.id == id);

  if (index == -1) {
    res
      .status(400)
      .send({ status: "error", data: null, message: "id not found" });
  }

  data.splice(index);
  res.send({ status: "success", data: null });
};
