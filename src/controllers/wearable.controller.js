'use strict';

const Wearable = require('../models/wearable.model');

exports.findAll = function(req, res) {
  Wearable.findAll(function(err, wearable) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', wearable);
    res.send(wearable);
  });
};

exports.create = function(req, res) {
    const new_wearable = new Wearable(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Wearable.create(new_wearable, function(err, wearable) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Wearable added successfully!",data:wearable});
        });
    }
};

exports.findById = function(req, res) {
    Wearable.findById(req.params.id, function(err, wearable) {
        if (err)
        res.send(err);
        res.json(wearable);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Wearable.update(req.params.id, new Wearable(req.body), function(err, wearable) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Wearable successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  Wearable.delete( req.params.id, function(err, wearable) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Wearable successfully deleted' });
  });
};