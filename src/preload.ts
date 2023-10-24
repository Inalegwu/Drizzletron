import { exposeApiToGlobalWindow } from "./ipcs";

console.log("Fuck yeah I'm mounted up");

const { key, api } = exposeApiToGlobalWindow({
  apiKey: "api",
});

declare global {
  interface Window {
    [key]: typeof api;
  }
}
