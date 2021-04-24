'user strict';
var dbConn = require('../../config/db.config');

//Wearable object create
var Wearable = function(wearable){
    this.first_name     = wearable.first_name;
    this.last_name      = wearable.last_name;
    this.email          = wearable.email;
    this.phone          = wearable.phone;
    this.updated_at     = new Date();
};
Wearable.create = function (newWearable, result) {    
    dbConn.query("INSERT INTO wearables set ?", newWearable, function (err, res) {
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
Wearable.findById = function (id, result) {
    dbConn.query("Select * FROM wearables where wearable_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Wearable.findAll = function (result) {
    dbConn.query("Select * FROM wearables", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('wearables : ', res);  
            result(null, res);
        }
    });   
};
Wearable.update = function(id, wearable, result){
  dbConn.query("UPDATE wearables SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [wearable.first_name,wearable.last_name,wearable.email,wearable.phone,wearable.organization,wearable.designation,wearable.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Wearable.delete = function(id, result){
     dbConn.query("DELETE FROM wearables WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Wearable;