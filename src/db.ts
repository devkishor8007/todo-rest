import postgres from "postgres";
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { DB_URL } from "./config";

export const dbConfig = () => {
  console.log(DB_URL, "<<<<<DB_URL", process.env.DB_URL);

  const client = postgres(String(DB_URL));
  const db: PostgresJsDatabase = drizzle(client);

  migrate(db, { migrationsFolder: "./drizzle" });

  return db;
};
