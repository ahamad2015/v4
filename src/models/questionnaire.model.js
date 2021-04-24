'user strict';
var dbConn = require('../../config/db.config');

//Questionnaire object create
var Questionnaire = function(questionnaire){
    this.first_name     = questionnaire.first_name;
    this.last_name      = questionnaire.last_name;
    this.email          = questionnaire.email;
    this.phone          = questionnaire.phone;
    this.updated_at     = new Date();
};
Questionnaire.create = function (newQuestionnaire, result) {    
    dbConn.query("INSERT INTO questionnaires set ?", newQuestionnaire, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Questionnaire.findById = function (id, result) {
    dbConn.query("Select * FROM questionnaires where questionnaire_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Questionnaire.findAll = function (result) {
    dbConn.query("Select * FROM questionnaires", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('questionnaires : ', res);  
            result(null, res);
        }
    });   
};
Questionnaire.update = function(id, questionnaire, result){
  dbConn.query("UPDATE questionnaires SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [questionnaire.first_name,questionnaire.last_name,questionnaire.email,questionnaire.phone,questionnaire.organization,questionnaire.designation,questionnaire.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Questionnaire.delete = function(id, result){
     dbConn.query("DELETE FROM questionnaires WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Questionnaire;