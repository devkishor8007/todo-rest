import {
  pgTable,
  pgEnum,
  pgSchema,
  AnyPgColumn,
  serial,
  varchar,
  integer,
} from "drizzle-orm/pg-core";

import { relations, sql } from "drizzle-orm";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey().notNull(),
  title: varchar("title", { length: 50 }).notNull(),
  userId: integer("user_id").references(() => users.id),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  username: varchar("username", { length: 25 }).notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  todos: many(todos),
}));
