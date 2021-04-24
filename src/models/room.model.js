'user strict';
var dbConn = require('../../config/db.config');

//Room object create
var Room = function(room){
    this.first_name     = room.first_name;
    this.last_name      = room.last_name;
    this.email          = room.email;
    this.phone          = room.phone;
    this.updated_at     = new Date();
};
Room.create = function (newRoom, result) {    
    dbConn.query("INSERT INTO rooms set ?", newRoom, function (err, res) {
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
Room.findById = function (id, result) {
    dbConn.query("Select * FROM rooms where room_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Room.findAll = function (result) {
    dbConn.query("Select * FROM rooms", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('rooms : ', res);  
            result(null, res);
        }
    });   
};
Room.update = function(id, room, result){
  dbConn.query("UPDATE rooms SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [room.first_name,room.last_name,room.email,room.phone,room.organization,room.designation,room.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Room.delete = function(id, result){
     dbConn.query("DELETE FROM rooms WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Room;