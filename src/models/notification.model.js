'user strict';
var dbConn = require('../../config/db.config');

//Notification object create
var Notification = function(notification){
    this.first_name     = notification.first_name;
    this.last_name      = notification.last_name;
    this.email          = notification.email;
    this.phone          = notification.phone;
    this.updated_at     = new Date();
};
Notification.create = function (newNotification, result) {    
    dbConn.query("INSERT INTO notifications set ?", newNotification, function (err, res) {
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
Notification.findById = function (id, result) {
    dbConn.query("Select * FROM notifications where notification_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Notification.findAll = function (result) {
    dbConn.query("Select * FROM notifications", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('notifications : ', res);  
            result(null, res);
        }
    });   
};
Notification.update = function(id, notification, result){
  dbConn.query("UPDATE notifications SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [notification.first_name,notification.last_name,notification.email,notification.phone,notification.organization,notification.designation,notification.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Notification.delete = function(id, result){
     dbConn.query("DELETE FROM notifications WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Notification;