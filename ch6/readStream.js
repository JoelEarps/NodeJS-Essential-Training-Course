//stream interface provides us with an interface to read and write data - can communicate with other processes and users 
const fs = require("fs");


const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "utf-8");
let fileText = "";

console.log("type something...");
//readable stream
//file system also comes with a way to create readable streams
readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);
  fileText += data;
});

//readStreams are less memory intensive as they allow us to read files chunk by chunk or bit by bit rather than all at once
//they give us control as they raise events
//read firts bit of data read
readStream.once("data", data => {
  console.log(data);
})

//end event
readStream.on("end", () =>{
  console.log("Finished reading file");
  console.log(`Total file lenght ${fileText.length -1}`);
});

//streams in everything in node!