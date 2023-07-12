"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    schema: "./src/schema/*",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        // ssl: false,
        connectionString: 'postgres://postgres:1234@localhost:5432/drizzle'
        // connectionString:
        //   "postgres://kishor:GLf08CBFKQnN@ep-little-star-894269.us-east-2.aws.neon.tech/neondb?sslmode=require",
    },
};
