import { createInterprocess } from "interprocess";
import { InsertCity, InsertCountry } from "./models";
import { addCity, addCountry, getAllCities, getAllCountries } from "./actions";

export const { ipcMain, ipcRenderer, exposeApiToGlobalWindow } =
  createInterprocess({
    main: {
      async insertCity(_, data: InsertCity) {
        const response = await addCity(data);

        return response;
      },
      async getCities() {
        const data = await getAllCities();

        return data.map((v) => ({ name: v.name, id: v.id }));
      },
      async geCountries() {
        const data = await getAllCountries();

        return data.map((v) => ({ name: v.name, id: v.id }));
      },
      async insertCountry(_, data: InsertCountry) {
        const response = addCountry(data);

        return response;
      },
    },
  });
