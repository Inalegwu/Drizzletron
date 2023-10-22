import { createInterprocess } from "interprocess";
import { getAllCities } from "./actions";
export const { ipcMain, ipcRenderer, exposeApiToGlobalWindow } = createInterprocess({
    main: {
        async insertCity(_, data) {
            console.log(data);
        },
        async getCities() {
            const data = getAllCities();
            return data;
        },
    },
});
