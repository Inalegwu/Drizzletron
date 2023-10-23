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

        console.log(`CITIES => ${data}`);

        return data;
      },
      async geCountries() {
        const data = await getAllCountries();

        return data;
      },
      async insertCountry(_, data: InsertCountry) {
        const response = addCountry(data);

        console.log(response);

        return response;
      },
    },
  });
