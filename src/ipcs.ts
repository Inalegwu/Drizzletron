import { createInterprocess } from "interprocess";
import { InsertCity, InsertCountry } from "./models";
import {
  addCity,
  addCountry,
  deleteCityById,
  deleteCountryById,
  getAllCities,
  getAllCountries,
} from "./actions";

export const { ipcMain, ipcRenderer, exposeApiToGlobalWindow } =
  createInterprocess({
    main: {
      async insertCity(_, data: InsertCity) {
        console.log(data);
        const response = await addCity(data);

        return response;
      },
      async getCities() {
        const data = await getAllCities();

        return data;
      },
      async geCountries() {
        const data = await getAllCountries();

        return data;
      },
      async insertCountry(_, data: InsertCountry) {
        const response = addCountry(data);

        return response;
      },
      async deleteCity(_, id: string) {
        console.log(id);
        const result = await deleteCityById(id);
      },
      async deleteCountry(_, id: string) {
        const result = await deleteCountryById(id);
      },
    },
  });
