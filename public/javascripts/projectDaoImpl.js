const fs = require("fs");
const path = require("path");
var connection = require('./config.js');

function localProjectsJson(){
   return fs.readFileSync( path.resolve(__dirname, "../../projects.json"),'utf8');
}

function writeLocalProjectsJson(data){
   // fs.readFileSync( path.resolve(__dirname, "../../projects.json"),'utf8');
   
    fs.writeFileSync(path.resolve(__dirname, "../../projects.json"), JSON.stringify(data));
 }
 function mysqlProjectjson() {

   connection.query("SELECT * FROM project_details",function(error, results, fields)
    {
      console.log(JSON.stringify(results));
    });
 
  }
module.exports.localProjectsJson=localProjectsJson;
module.exports.writeLocalProjectsJson=writeLocalProjectsJson;
module.exports.mysqlProjectjson=mysqlProjectjson;
