var express = require('express');
var dao = require('../public/javascripts/projectDaoImpl.js');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* ADD project by Id */
router.post('/add-project',function(req,res){
        dao.addProject(req.body,function(data){
                res.end(JSON.stringify(data));
         });

});

/* GET list of projects. */
router.get('/get-project-list', function(req, res, next) {
        //res.end(dao.localProjectsJson());
        dao.getProjectList(function(data){
                res.end(JSON.stringify(data));
        })
  });

/* GET project by Id */
 router.get('/project/:recordId',function(req,res,next){

        dao.getProjectByRecordId(req.params.recordId,function(data){
                if(data==undefined || data.length==0)  
                        res.send("<html><head></head><body>Project Not Found...</body></html>");
                res.end(JSON.stringify(data));
        });

});

/* DELETE project by Id */
router.delete('/delete-project/:recordId',function(req,res){
        dao.deleteByRecordId(req.params.recordId,function(data){
                res.send("<html><head></head><body>"+data+"</body></html>");
         });

});

/* UPDATE project by Id */
router.put('/update-project/:recordId',function(req,res){
        dao.updateByRecordId(req.params.recordId,req.body,function(data){
                res.end(JSON.stringify(data));
         });

});

module.exports = router;
