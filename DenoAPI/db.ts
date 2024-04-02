import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("todos.db");
db.query(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    completed BOOLEAN
  )
`);

export default db;
