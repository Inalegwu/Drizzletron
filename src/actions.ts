import db from "./db";
import { InsertCity, InsertCountry, cities, countries } from "./models";

export function getAllCities() {
  const data = db.select({ name: cities.name, id: cities.id }).from(cities);

  return data;
}

export function addCity(data: InsertCity) {
  const insert = db
    .insert(cities)
    .values(data)
    .returning({ name: cities.name, id: cities.id });

  return insert;
}

export function addCountry(data: InsertCountry) {
  const insert = db.insert(countries).values(data).returning({
    id: countries.id,
    name: countries.name,
  });

  return insert;
}

export function getAllCountries() {
  const data = db.select().from(countries);

  return data;
}
