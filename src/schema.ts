import { integer, pgEnum, pgTable, serial, varchar } from "drizzle-orm/pg-core";

// declaring enum in database
export const statusEnum = pgEnum("status", [
  "complete",
  "incomplete",
  "pending",
]);

export const todos = pgTable("todo", {
  id: serial("id").primaryKey(),
  title: varchar("name", { length: 256 }),
  status: statusEnum("status"),
});
