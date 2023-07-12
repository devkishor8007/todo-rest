DO $$ BEGIN
 CREATE TYPE "status" AS ENUM('complete', 'incomplete', 'pending');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "todo" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"status" "status"
);
--> statement-breakpoint
DROP TABLE "cities";