import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

const sqlite = new Database(`../db.sqlite`, {
  nativeBinding:
    "node_modules/better-sqlite3/build/Release/better_sqlite3.node",
});
const db: BetterSQLite3Database = drizzle(sqlite);

await migrate(db, { migrationsFolder: "drizzle" });

export default db;
