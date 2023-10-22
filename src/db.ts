import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
// import { app } from "electron";

const sqlite = new Database(`./db.sqlite`, {
  nativeBinding:
    "node_modules/better-sqlite3/build/Release/better_sqlite3.node",
});
const db: BetterSQLite3Database = drizzle(sqlite);

export default db;
