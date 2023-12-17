const { Router } = require("express");
const TodoController = require("../controllers/todoController");

const router = Router();

router.get("/todo", TodoController.all);
router.post("/todo", TodoController.add);
router.put("/todo/:id", TodoController.update);
router.delete("/todo/:id", TodoController.remove);

module.exports = router;
