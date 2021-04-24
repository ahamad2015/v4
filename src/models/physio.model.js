'user strict';
var dbConn = require('../../config/db.config');

//Physiotest object create
var Physiotest = function(physiotest){
    this.first_name     = physiotest.first_name;
    this.last_name      = physiotest.last_name;
    this.email          = physiotest.email;
    this.phone          = physiotest.phone;
    this.updated_at     = new Date();
};
Physiotest.create = function (newPhysiotest, result) {    
    dbConn.query("INSERT INTO physiotests set ?", newPhysiotest, function (err, res) {
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
Physiotest.findById = function (id, result) {
    dbConn.query("Select * FROM physiotests where physiotest_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Physiotest.findAll = function (result) {
    dbConn.query("Select * FROM physiotests", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('physiotests : ', res);  
            result(null, res);
        }
    });   
};
Physiotest.update = function(id, physiotest, result){
  dbConn.query("UPDATE physiotests SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [physiotest.first_name,physiotest.last_name,physiotest.email,physiotest.phone,physiotest.organization,physiotest.designation,physiotest.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Physiotest.delete = function(id, result){
     dbConn.query("DELETE FROM physiotests WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Physiotest;