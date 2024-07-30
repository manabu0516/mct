
const fs = require('fs').promises

const readJson = async (path) => {
    const text = await fs.readFile(path, "utf8");
    return JSON.parse(text);
};

module.exports = {
    readJson : readJson
};