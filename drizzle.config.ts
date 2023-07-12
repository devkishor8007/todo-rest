import type { Config } from "drizzle-kit";
import { DB_URL } from "./src/config";

export default {
  schema: "./src/schema/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: String(String(DB_URL)),
  },
} satisfies Config;
