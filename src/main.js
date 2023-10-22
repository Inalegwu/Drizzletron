import path from "path";
import { BrowserWindow, app } from "electron";
import { ipcMain } from "./ipcs";
const { handle } = ipcMain;
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js"),
        },
    });
    handle.insertCity();
    mainWindow.loadFile("dist/index.html");
    // mainWindow.webContents.openDevTools({ mode: "detach" });
};
app.whenReady().then(() => {
    createWindow();
});
app.once("window-all-closed", () => app.quit());
