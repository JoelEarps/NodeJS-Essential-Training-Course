const fs = require("fs");

//create write stream for tetx file
//readable streams meant to work with writeable stream
const writeStream = fs.createWriteStream("./assets/myFile.txt", "utf-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "utf-8");

/*readStream.on("data", data =>{
    writeStream.write(data);
}) */

readStream.pipe(writeStream);

