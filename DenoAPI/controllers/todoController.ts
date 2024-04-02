import { Context } from "https://deno.land/x/oak/mod.ts";
import db from "../db.ts";

export const getAllTodos = async (ctx: Context) => {
  const query = await db.query("SELECT * FROM todos");
  const formattedQuery = query.map((row: any) => {
    return {
        id: row[0],
        title: row[1],
        completed: row[2]
    };
  }); 
  ctx.response.body = formattedQuery; 
};

export const getTodoById = async (ctx: Context) => {
  const { id } = ctx.params;
  const todo = await db.query("SELECT * FROM todos WHERE id = ?", [id]);
  if (todo.length) {
    ctx.response.body = todo[0];
  } else {
    ctx.response.status = 404;
    ctx.response.body = { message: "Todo not found" };
  }
};

export const createTodo = async (ctx: Context) => {
    const body = await ctx.request.body.json();
    const title = body.title;
    const completed = body.completed;
    await db.query("INSERT INTO todos (title, completed) VALUES (?, ?)", [title, completed]);
    const newTodoId = await db.lastInsertRowId;
    ctx.response.body = { id: newTodoId, title: title, completed: completed };
  };
  

export const updateTodo = async (ctx: Context) => {
  const { id } = ctx.params;
  const todo = await db.query("SELECT * FROM todos WHERE id = ?", [id]);
  if (todo.length) {
    const body = await ctx.request.body.json();
    await db.query("UPDATE todos SET title = ?, completed = ? WHERE id = ?", [body.title, body.completed, id]);
    const title = body.title;
    const completed = body.completed;
    ctx.response.body = { id: id, title: title, completed: completed };
  } else {
    ctx.response.status = 404;
    ctx.response.body = { message: "Todo not found" };
  }
};

export const deleteTodo = async (ctx: Context) => {
  const { id } = ctx.params;
  const todo = await db.query("SELECT * FROM todos WHERE id = ?", [id]);
  if (todo.length) {
    await db.query("DELETE FROM todos WHERE id = ?", [id]);
    ctx.response.body = { message: "Todo deleted successfully" };
  } else {
    ctx.response.status = 404;
    ctx.response.body = { message: "Todo not found" };
  }
};