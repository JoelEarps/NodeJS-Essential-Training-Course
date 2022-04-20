//can also append files - so lets append colours.json
//but you don't need to use fs to read json
const fs = require("fs");
const colorData = require("./assets/colors.json");

colorData.colorList.forEach(c => {
    fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex} \n`, err =>{
        if(err){
            throw err;
        }
    });
});