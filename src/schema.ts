import { boolean, date, integer, pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

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
  description: text('description'),
  isHidden: boolean('isHidden').default(false),
  created_at: timestamp('created_at').defaultNow()
});
