'user strict';
var dbConn = require('../../config/db.config');

//Facility object create
var Facility = function(facility){
    this.first_name     = facility.first_name;
    this.last_name      = facility.last_name;
    this.email          = facility.email;
    this.phone          = facility.phone;
    this.updated_at     = new Date();
};
Facility.create = function (newFacility, result) {    
    dbConn.query("INSERT INTO facilities set ?", newFacility, function (err, res) {
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
Facility.findById = function (id, result) {
    dbConn.query("Select * FROM facilities where facility_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Facility.findAll = function (result) {
    dbConn.query("Select * FROM facilities", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('facilities : ', res);  
            result(null, res);
        }
    });   
};
Facility.update = function(id, facility, result){
  dbConn.query("UPDATE facilities SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [facility.first_name,facility.last_name,facility.email,facility.phone,facility.organization,facility.designation,facility.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Facility.delete = function(id, result){
     dbConn.query("DELETE FROM facilities WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Facility;