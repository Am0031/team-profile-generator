//requiring the fs module from Node.js core
const fs = require("fs");
//requiring the path module from Node.js core
const path = require("path");
//requiring the change-case module to format file name
const { paramCase } = require("change-case");

//function to write string to file with given filename
const writeToFile = (fileName, string) => {
  try {
    const filename = paramCase(fileName);
    const filepath = path.join(__dirname, "../dist", `${filename}.html`);
    // write data to new file
    fs.writeFileSync(filepath, string);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = writeToFile;
