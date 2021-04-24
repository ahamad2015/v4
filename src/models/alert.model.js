'user strict';
var dbConn = require('../../config/db.config');

//Alert object create
var Alert = function(alert){
    // this.id             = alert.id;
    this.alert_id       = alert.alert_id;
    this.customer_id    = alert.customer_id;
    this.facility_id    = alert.facility_id;
    this.ward_id        = alert.ward_id;
    this.resident_id    = alert.resident_id;
    this.wearable_id    = alert.wearable_id;
    this.alert_type     = alert.alert_type;
    this.alert_class    = alert.alert_class;
    // this.alert_body     = alert.alert_body;
    // this.attend_status  = alert.attend_status;
    // this.attend_by      = alert.attend_by;
    // this.attend_body    = alert.attend_body;
    // this.attend_at      = alert.attend_at;
    // this.log_status     = alert.log_status;
    // this.log_by         = alert.log_by;
    // this.log_body       = alert.log_body;
    // this.log_at         = alert.log_at;
    // this.created_at     = new Date();
};
Alert.create = function (newAlert, result) {    
    dbConn.query("INSERT INTO criticalalerts set ?", newAlert, function (err, res) {
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
Alert.findById = function (id, result) {
    dbConn.query("Select * FROM criticalalerts where alert_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Alert.findAll = function (result) {
    dbConn.query("Select * FROM criticalalerts", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('alerts : ', res);  
            result(null, res);
        }
    });   
};
Alert.update = function(id, alert, result){
  dbConn.query("UPDATE criticalalerts SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [alert.first_name,alert.last_name,alert.email,alert.phone,alert.organization,alert.designation,alert.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Alert.delete = function(id, result){
     dbConn.query("DELETE FROM criticalalerts WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Alert;