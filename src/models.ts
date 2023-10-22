import {
  sqliteTable,
  text,
  uniqueIndex,
  integer,
} from "drizzle-orm/sqlite-core";

export const countries = sqliteTable(
  "countries",
  {
    id: text("id").unique().notNull().primaryKey(),
    name: text("name"),
  },
  (countries) => ({
    nameIdx: uniqueIndex("nameId").on(countries.name),
  }),
);

export const cities = sqliteTable("cities", {
  id: integer("id").primaryKey(),
  name: text("name"),
  countryId: integer("country_id").references(() => countries.id),
});

export type InsertCountry = typeof countries.$inferInsert;
export type Country = typeof countries.$inferSelect;
export type InsertCity = typeof cities.$inferInsert;
export type City = typeof cities.$inferSelect;
