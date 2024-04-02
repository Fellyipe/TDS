import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo } from "./controllers/todoController.ts";

const router = new Router();

router
  .get("/todos", getAllTodos)
  .get("/todos/:id", getTodoById)
  .post("/todos", createTodo)
  .put("/todos/:id", updateTodo)
  .delete("/todos/:id", deleteTodo);

export default router;
