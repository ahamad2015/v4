'user strict';
var dbConn = require('../../config/db.config');

//Loa object create
var Loa = function(loa){
    this.first_name     = loa.first_name;
    this.last_name      = loa.last_name;
    this.email          = loa.email;
    this.phone          = loa.phone;
    this.updated_at     = new Date();
};
Loa.create = function (newLoa, result) {    
    dbConn.query("INSERT INTO loadata set ?", newLoa, function (err, res) {
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
Loa.findById = function (id, result) {
    dbConn.query("Select * FROM loadata where loa_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Loa.findAll = function (result) {
    dbConn.query("Select * FROM loadata", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('loa : ', res);  
            result(null, res);
        }
    });   
};
Loa.update = function(id, loa, result){
  dbConn.query("UPDATE loadata SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [loa.first_name,loa.last_name,loa.email,loa.phone,loa.organization,loa.designation,loa.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Loa.delete = function(id, result){
     dbConn.query("DELETE FROM loadata WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Loa;