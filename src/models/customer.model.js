'user strict';
var dbConn = require('../../config/db.config');

//Customer object create
var Customer = function(customer){
    this.first_name     = customer.first_name;
    this.last_name      = customer.last_name;
    this.email          = customer.email;
    this.phone          = customer.phone;
    this.updated_at     = new Date();
};
Customer.create = function (newCustomer, result) {    
    dbConn.query("INSERT INTO customers set ?", newCustomer, function (err, res) {
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
Customer.findById = function (id, result) {
    dbConn.query("Select * from customers where customer_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Customer.findAll = function (result) {
    dbConn.query("Select * from customers", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('customers : ', res);  
            result(null, res);
        }
    });   
};
Customer.update = function(id, customer, result){
  dbConn.query("UPDATE customers SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [customer.first_name,customer.last_name,customer.email,customer.phone,customer.organization,customer.designation,customer.salary, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Customer.delete = function(id, result){
     dbConn.query("DELETE FROM customers WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Customer;