const fs = require('fs-extra');

const readTestData = async (filePath) => {
  const data = await fs.readJson(filePath);
  return data;
};

module.exports = {
  readTestData,
};
    