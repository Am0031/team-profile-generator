// requiring the fs module from Node.js core
const fs = require("fs");
//requiring the path module from Node.js core
const path = require("path");

const writeToFile = (fileName, string) => {
  try {
    const filepath = path.join(__dirname, "../dist", `${fileName}.html`);
    // write data to new file
    fs.writeFileSync(filepath, string);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = writeToFile;
