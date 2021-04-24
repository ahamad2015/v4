'user strict';
var dbConn = require('../../config/db.config');

//Resident object create
var Resident = function(resident){
    this.first_name     = resident.first_name;
    this.last_name      = resident.last_name;
    this.email          = resident.email;
    this.phone          = resident.phone;
    this.updated_at     = new Date();
};
Resident.create = function (newResident, result) {    
    dbConn.query("INSERT INTO residents set ?", newResident, function (err, res) {
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
Resident.findById = function (id, result) {
    dbConn.query("Select * FROM residents where resident_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Resident.findAll = function (result) {
    dbConn.query("Select * FROM residents", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('residents : ', res);  
            result(null, res);
        }
    });   
};
Resident.update = function(id, resident, result){
  dbConn.query("UPDATE residents SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [resident.first_name,resident.last_name,resident.email,resident.phone,resident.organization,resident.designation,resident.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Resident.delete = function(id, result){
     dbConn.query("DELETE FROM residents WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Resident;