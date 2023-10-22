import db from "./db";
import { cities } from "./models";
export function getAllCities() {
    const data = db.select({ name: cities.name }).from(cities);
    return data;
}
export function addCity(data) {
    const insert = db
        .insert(cities)
        .values(data)
        .returning({ name: cities.name });
    return insert;
}
