"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRelations = exports.users = exports.todos = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
exports.todos = (0, pg_core_1.pgTable)("todos", {
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    title: (0, pg_core_1.varchar)("title", { length: 50 }).notNull(),
    userId: (0, pg_core_1.integer)("user_id").references(() => exports.users.id),
});
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    username: (0, pg_core_1.varchar)("username", { length: 25 }).notNull(),
});
exports.usersRelations = (0, drizzle_orm_1.relations)(exports.users, ({ many }) => ({
    todos: many(exports.todos),
}));
