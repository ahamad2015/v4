'user strict';
var dbConn = require('../../config/db.config');

//Kpi object create
var Kpi = function(kpi){
    this.first_name     = kpi.first_name;
    this.last_name      = kpi.last_name;
    this.email          = kpi.email;
    this.phone          = kpi.phone;
    this.updated_at     = new Date();
};
Kpi.create = function (newKpi, result) {    
    dbConn.query("INSERT INTO kpi set ?", newKpi, function (err, res) {
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
Kpi.findById = function (id, result) {
    dbConn.query("Select * FROM kpi where kpi_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Kpi.findAll = function (result) {
    dbConn.query("Select * FROM kpi", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('kpi : ', res);  
            result(null, res);
        }
    });   
};
Kpi.update = function(id, kpi, result){
  dbConn.query("UPDATE kpi SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [kpi.first_name,kpi.last_name,kpi.email,kpi.phone,kpi.organization,kpi.designation,kpi.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Kpi.delete = function(id, result){
     dbConn.query("DELETE FROM kpi WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Kpi;