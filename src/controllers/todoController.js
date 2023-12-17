const Todo = require("../models/Todo");

const all = async (req, res) => {
  try {
    const list = await Todo.findAll();
    res.json({ list });
  } catch (error) {
    console.error("Erro na função 'all':", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const add = async (req, res) => {
  try {
    if (req.body.title) {
      const newTodo = await Todo.create({
        title: req.body.title,
        done: !!req.body.done,
      });
      res.status(201).json({ item: newTodo });
    } else {
      res.status(400).json({ error: "Dados não enviados corretamente!" });
    }
  } catch (error) {
    console.error("Erro na função 'add':", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findByPk(id);

    if (!todo) {
      return res.status(400).json({ error: "Item não encontrado" });
    }

    if (req.body.title) {
      todo.title = req.body.title;
    }

    if (req.body.done) {
      switch (req.body.done.toLowerCase()) {
        case "success":
        case "true":
        case "1":
          todo.done = true;
          break;
        case "false":
        case "0":
          todo.done = false;
          break;
      }
    }

    await todo.save();
    res.json({ item: todo });
  } catch (error) {
    console.error("Erro na função 'update':", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findByPk(id);
    if (todo) {
      await todo.destroy(id);
      res.json({});
    } else {
      return res.status(400).json({ error: "Item não encontrado" });
    }
  } catch (error) {
    console.error("Erro na função 'remove':", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

module.exports = { all, add, update, remove };
