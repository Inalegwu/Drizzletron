import path from "path";
import { BrowserWindow, app } from "electron";
import { ipcMain } from "./ipcs";

const { handle } = ipcMain;

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    frame: false,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
      sandbox: false,
    },
  });

  handle.insertCity();
  handle.insertCountry();
  handle.geCountries();
  handle.getCities();
  handle.deleteCity();
  handle.deleteCountry();

  mainWindow.loadFile("dist/index.html");
  // mainWindow.webContents.openDevTools({ mode: "left" });
};

app.whenReady().then(() => {
  createWindow();
  console.log("Mounted");
});

app.once("window-all-closed", () => app.quit());
