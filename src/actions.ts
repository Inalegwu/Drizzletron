import db from "./db";
import { InsertCity, InsertCountry, cities, countries } from "./models";

export function getAllCities() {
  const data = db.select({ name: cities.name }).from(cities);

  return data;
}

export function addCity(data: InsertCity) {
  const insert = db
    .insert(cities)
    .values(data)
    .returning({ name: cities.name, id: cities.id });

  console.log(insert);

  return insert;
}

export function addCountry(data: InsertCountry) {
  const insert = db.insert(countries).values(data).returning({
    name: countries.name,
    id: countries.id,
  });

  console.log(insert);
  return true;
}

export function getAllCountries() {
  const data = db
    .select({ name: countries.name, id: countries.id })
    .from(countries);

  return data;
}
