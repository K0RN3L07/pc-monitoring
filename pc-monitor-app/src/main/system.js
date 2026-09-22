let sysinf = require("systeminformation")

async function getCPUData() {
    return await sysinf.cpu()   
}

module.exports = {
    getCPUData,
    
}