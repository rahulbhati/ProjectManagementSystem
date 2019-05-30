const fs = require("fs");
const path = require("path");

function localProjectsJson(){
   return fs.readFileSync( path.resolve(__dirname, "../../projects.json"),'utf8');
}

function writeLocalProjectsJson(data){
   // fs.readFileSync( path.resolve(__dirname, "../../projects.json"),'utf8');
   
    fs.writeFileSync(path.resolve(__dirname, "../../projects.json"), JSON.stringify(data));
 }
module.exports.localProjectsJson=localProjectsJson;
module.exports.writeLocalProjectsJson=writeLocalProjectsJson
