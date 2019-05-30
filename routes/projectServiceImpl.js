var express = require('express');
var dao = require('../public/javascripts/projectDaoImpl.js');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Add project */
router.post('/add-project',function(req, res){
        data = JSON.parse( dao.localProjectsJson() );
        data['project#'+(Object.keys(data).length+1)]=req.body;
        dao.writeLocalProjectsJson(data);
        res.end( JSON.stringify(data));
});

/* GET list of projects. */
router.get('/get-project-list', function(req, res, next) {
        res.end(dao.localProjectsJson());
  });

/* GET project by Id */
 router.get('/project/:recordId',function(req,res,next){

        var projects = JSON.parse( dao.localProjectsJson());
        var project = projects["project#" + req.params.recordId];
        if(project==undefined)  
                project="Project not found...";
        res.end( JSON.stringify(project));

});

/* DELETE project by Id */
router.delete('/delete-project/:recordId',function(req,res){
        data = JSON.parse( dao.localProjectsJson() );
        delete data["project#" + req.params.recordId];
        dao.writeLocalProjectsJson(data);
        res.send("<html><head></head><body>Project Deleted</body></html>");
});


module.exports = router;
