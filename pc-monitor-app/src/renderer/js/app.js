console.log("app.js loaded!");

window.api.getCPUData().then((data) => {
    console.log("CPU data:");
    console.log(data);
});