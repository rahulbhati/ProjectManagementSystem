var express = require('express');
var dao = require('../public/javascripts/projectDaoImpl.js');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
        res.send("<html><head></head><body>Local </body></html>");
});

/* Add project */
router.post('/add-project',function(req, res){
        data = JSON.parse( dao.readLocalJson() );
        data['project#'+(Object.keys(data).length+1)]=req.body;
        dao.writeLocalJson(data);
        res.end( JSON.stringify(data));
});

/* GET list of projects. */
router.get('/get-project-list', function(req, res, next) {
        res.end(dao.readLocalJson());
        
  });

/* GET project by Id */
 router.get('/project/:recordId',function(req,res,next){

        var projects = JSON.parse( dao.readLocalJson());
        var project = projects["project#" + req.params.recordId];
        if(project==undefined)  
                project="Project not found...";
        res.end( JSON.stringify(project));

});

/* DELETE project by Id */
router.delete('/delete-project/:recordId',function(req,res){
        data = JSON.parse( dao.readLocalJson() );
        delete data["project#" + req.params.recordId];
        dao.writeLocalJson(data);
        res.send("<html><head></head><body>Project Deleted</body></html>");
});


module.exports = router;
