const fs = require("fs");
const path = require("path");
var connection = require('./config.js');

function readLocalJson(){
   return fs.readFileSync( path.resolve(__dirname, "../../projects.json"),'utf8');
}

function writeLocalJson(data){
     fs.writeFileSync(path.resolve(__dirname, "../../projects.json"), JSON.stringify(data));
 }

 function addProject(project,callback) {
    connection.query('INSERT INTO project_details SET ?',project,function(error, results, fields) {
    if (error) throw callback(error);
      callback("Project Added Successfully.");
    });
    
}

 function getProjectList(callback) {
      connection.query("SELECT * FROM project_details",function(error, results, fields) {
        if (error) throw callback(error);
        callback(results);
        });
 
  }
  function getProjectByRecordId(record_Id,callback) {
    connection.query("SELECT * FROM project_details WHERE record_id =?",[record_Id],function(error, results, fields) {
      if (error) throw callback(error);
      callback(results);
      });

}

function deleteByRecordId(record_Id,callback) {
  connection.query("delete FROM project_details WHERE record_id =?",[record_Id],function(error, results, fields) {
    if (error) throw callback(error);;
      callback("Project Deleted Successfully.");
    });
}

function updateByRecordId(record_Id,project,callback) {
  connection.query("update project_details set name=?,scrum_master=?,description=?,team_members=? WHERE record_id =?",[project.name,project.scrum_master,project.description,project.team_members,record_Id],function(error, results, fields) {
    if (error) throw callback(error);;
      callback("Project Updated Successfully.");
    });
    
}

module.exports.readLocalJson=readLocalJson;
module.exports.writeLocalJson=writeLocalJson;
module.exports.getProjectList=getProjectList;
module.exports.getProjectByRecordId=getProjectByRecordId;
module.exports.deleteByRecordId=deleteByRecordId;
module.exports.updateByRecordId=updateByRecordId;
module.exports.addProject=addProject;

