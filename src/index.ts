require("dotenv").config({});
import express from "express";
import { todos } from "./schema";

import { eq } from "drizzle-orm";
import { dbConfig } from "./db";

const db = dbConfig();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const data = await db.select().from(todos);

  res.json({ data });
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await db.select().from(todos).where(eq(todos.id, +id));
  res.json({ data });
});

app.post("/", async (req, res) => {
  const { status, title } = req.body;
  const data = await db.insert(todos).values({ status, title }).returning();
  console.log(data);

  if (!data) {
    return res.json({
      message: "something went wrong",
      status: 500,
      data,
    });
  }

  res.json({
    message: "successfully created",
    status: 201,
    data,
  });
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await db.delete(todos).where(eq(todos.id, +id)).returning();

  res.json({
    message: "successfully deleted",
    status: 200,
    data,
  });
});

app.listen(port, async () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
