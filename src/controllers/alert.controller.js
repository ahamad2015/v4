'use strict';

const Alert = require('../models/alert.model');

exports.findAll = function(req, res) {
  Alert.findAll(function(err, alert) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', alert);
    res.send(alert);
  });
};

exports.create = function(req, res) {
    const new_alert = new Alert(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Alert.create(new_alert, function(err, alert) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Alert added successfully!",data:alert});
        });
    }
};

exports.findById = function(req, res) {
    Alert.findById(req.params.id, function(err, alert) {
        if (err)
        res.send(err);
        res.json(alert);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Alert.update(req.params.id, new Alert(req.body), function(err, alert) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Alert successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  Alert.delete( req.params.id, function(err, alert) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Alert successfully deleted' });
  });
};