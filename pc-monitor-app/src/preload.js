const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
    getCPUData: () => ipcRenderer.invoke("get-cpu-data")
});