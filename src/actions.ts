import db from "./db";
import { InsertCity, cities } from "./models";

export function getAllCities() {
  const data = db.select({ name: cities.name }).from(cities);

  return data;
}

export function addCity(data: InsertCity) {
  const insert = db
    .insert(cities)
    .values(data)
    .returning({ name: cities.name });

  return insert;
}