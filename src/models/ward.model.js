'user strict';
var dbConn = require('../../config/db.config');

//Ward object create
var Ward = function(ward){
    this.first_name     = ward.first_name;
    this.last_name      = ward.last_name;
    this.email          = ward.email;
    this.phone          = ward.phone;
    this.updated_at     = new Date();
};
Ward.create = function (newWard, result) {    
    dbConn.query("INSERT INTO wards set ?", newWard, function (err, res) {
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
Ward.findById = function (id, result) {
    dbConn.query("Select * FROM wards where ward_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Ward.findAll = function (result) {
    dbConn.query("Select * FROM wards", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('wards : ', res);  
            result(null, res);
        }
    });   
};
Ward.update = function(id, ward, result){
  dbConn.query("UPDATE wards SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [ward.first_name,ward.last_name,ward.email,ward.phone,ward.organization,ward.designation,ward.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Ward.delete = function(id, result){
     dbConn.query("DELETE FROM wards WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Ward;