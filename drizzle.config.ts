import type { Config } from "drizzle-kit";
import { app } from "electron";

export default {
  schema: "./src/models.ts",
  out: ".drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: `./db.sqlite`,
  },
} satisfies Config;
