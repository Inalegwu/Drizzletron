import { exposeApiToGlobalWindow } from "./ipcs";
console.log("preloaded!");
const { key, api } = exposeApiToGlobalWindow({
    apiKey: "api",
});
