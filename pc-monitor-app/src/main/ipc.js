const { ipcMain } = require("electron");
const { getCPUData } = require("./system");

ipcMain.handle("get-cpu-data", async () => {
    return await getCPUData();
});