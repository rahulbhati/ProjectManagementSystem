var express = require('express');
var utility = require('../public/javascripts/utility.js');
var router = express.Router();
var fs = require("fs");


var new_project= {"project#4" : {
  "record-id": 4,
 "name" : "Project#4-Name",
 "scrum-master" : "Project#4-Scrum-Master-Name",
 "description" : "Project#4-Description",
      "team-members" :{
              "Team-Member-1" : {
                  "name" : "Project#4-Team-Member-1-Name",
                  "member-id": 9,
                  "member-designation":"Project#4-Team-Member-1-Designation"
              },
              "Team-Member-2" : {
                  "name" : "Project#4-Team-Member-2-Name",
                  "member-id": 10,
                  "member-designation":"Project#4-Team-Member-2-Designation"
              },
              "Team-Member-3" : {
                  "name" : "Project#4-Team-Member-3-Name",
                  "member-id": 11,
                  "member-designation":"Project#4-Team-Member-3-Designation"
              }
      }
 
}
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Add project */
router.post('/add-project',function(req, res){
    data = JSON.parse( utility.localProjectsJson() );
    data['project#4']=req.body;
    console.log(data);
    utility.writeLocalProjectsJson(data);
    res.end( JSON.stringify(data));
});

/* GET list of projects. */
router.get('/get-project-list', function(req, res, next) {
   res.end(utility.localProjectsJson());
  });

/* GET project by Id */
 router.get('/project/:recordId',function(req,res,next){
  var projects = JSON.parse( utility.localProjectsJson());
  var project = projects["project#" + req.params.recordId];
  
  if(project==undefined)  
        project="Project not found...";
  res.end( JSON.stringify(project));
});

/* DELETE project by Id */
router.delete('/delete-project/:recordId',function(req,res){
  data = JSON.parse( utility.localProjectsJson() );
  delete data["project#" + req.params.recordId];
 
  utility.writeLocalProjectsJson(data);
  res.send("<html><head></head><body>Project Deleted</body></html>");
});


module.exports = router;
