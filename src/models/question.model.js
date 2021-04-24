'user strict';
var dbConn = require('../../config/db.config');

//Question object create
var Question = function(question){
    this.first_name     = question.first_name;
    this.last_name      = question.last_name;
    this.email          = question.email;
    this.phone          = question.phone;
    this.updated_at     = new Date();
};
Question.create = function (newQuestion, result) {    
    dbConn.query("INSERT INTO questions set ?", newQuestion, function (err, res) {
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
Question.findById = function (id, result) {
    dbConn.query("Select * FROM questions where question_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Question.findAll = function (result) {
    dbConn.query("Select * FROM questions", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('questions : ', res);  
            result(null, res);
        }
    });   
};
Question.update = function(id, question, result){
  dbConn.query("UPDATE questions SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [question.first_name,question.last_name,question.email,question.phone,question.organization,question.designation,question.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Question.delete = function(id, result){
     dbConn.query("DELETE FROM questions WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Question;