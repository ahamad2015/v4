'user strict';
var dbConn = require('../../config/db.config');

//Caregiver object create
var Caregiver = function(caregiver){
    this.caregiver_id           = caregiver.caregiver_id;
    this.customer_id            = caregiver.customer_id;
    this.facility_id            = caregiver.facility_id;
    this.caregiver_firstName    = caregiver.caregiver_firstName;
    this.caregiver_lastName     = caregiver.caregiver_lastName;
    this.caregiver_email        = caregiver.caregiver_email;
    this.caregiver_phone        = caregiver.caregiver_phone;
};
Caregiver.create = function (newCaregiver, result) {    
    dbConn.query("INSERT INTO caregivers set ?", newCaregiver, function (err, res) {
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
Caregiver.findById = function (id, result) {
    dbConn.query("Select * FROM caregivers where caregiver_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Caregiver.findAll = function (result) {
    dbConn.query("Select * FROM caregivers", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('caregivers : ', res);  
            result(null, res);
        }
    });   
};
Caregiver.update = function(id, caregiver, result){
  dbConn.query("UPDATE caregivers SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [caregiver.first_name,caregiver.last_name,caregiver.email,caregiver.phone,caregiver.organization,caregiver.designation,caregiver.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Caregiver.delete = function(id, result){
     dbConn.query("DELETE FROM caregivers WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Caregiver;