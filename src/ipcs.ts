import { createInterprocess } from "interprocess";
import { InsertCity, InsertCountry } from "./models";
import { getAllCities, getAllCountries } from "./actions";

export const { ipcMain, ipcRenderer, exposeApiToGlobalWindow } =
  createInterprocess({
    main: {
      async insertCity(_, data: InsertCity) {
        console.log(data);
      },
      async getCities() {
        const data = getAllCities();

        return data;
      },
      async geCountries() {
        const data = getAllCountries();

        return data;
      },
      async insertCountry(_, data: InsertCountry) {
        console.log(data);
      },
    },
  });
