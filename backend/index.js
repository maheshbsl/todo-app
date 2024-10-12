const { createTodo, updateTodo } = require("./types.js");
const { todo } = require('./db.js');
const cors = require('cors')
const express = require("express");
const { mongo, default: mongoose } = require("mongoose");

const app = express();

const port = 3000;
app.use(cors());
app.listen(port);
app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You have sent the wrong inputs",
    });
    return;
  }
  // store on mongodb
  await todo.create({
    title:createPayload.title,
    description: createPayload.description,
    completed: false,
  })

  res.json({
    "msg": "Todo Created"
  })
});

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});

    res.json({
        "Todos": todos
    })
});

app.put("/completed", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = updateTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You have sent the wrong inputs",
    });
    return;
  }
  //update on mongodb
  const updateTodo = await todo.findByIdAndUpdate({
    _id: req.body.id
  },
  {
    completed: true,
  })

  res.json({
    "msg": "Todo marked as completed."
  })

});
