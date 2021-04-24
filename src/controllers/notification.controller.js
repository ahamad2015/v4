'use strict';

const Notification = require('../models/notification.model');

exports.findAll = function(req, res) {
  Notification.findAll(function(err, notification) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', notification);
    res.send(notification);
  });
};

exports.create = function(req, res) {
    const new_notification = new Notification(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Notification.create(new_notification, function(err, notification) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Notification added successfully!",data:notification});
        });
    }
};

exports.findById = function(req, res) {
    Notification.findById(req.params.id, function(err, notification) {
        if (err)
        res.send(err);
        res.json(notification);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Notification.update(req.params.id, new Notification(req.body), function(err, notification) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Notification successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  Notification.delete( req.params.id, function(err, notification) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Notification successfully deleted' });
  });
};