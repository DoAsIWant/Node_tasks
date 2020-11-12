const fs = require("fs");
function showFiles(path){
    fs.readdir(path,(err,files)=>{
        if (err) {
            throw err
        }

        files.forEach(e=>{
            console.log(e);
        })
    })
}

module.exports = showFiles;