import { createInterprocess } from "interprocess";
import { InsertCity } from "./models";
import { getAllCities } from "./actions";

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
    },
  });
