'use strict';

const Caregiver = require('../models/caregiver.model');

exports.findAll = function(req, res) {
  Caregiver.findAll(function(err, caregiver) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', caregiver);
    res.send(caregiver);
  });
};

exports.create = function(req, res) {
    const new_caregiver = new Caregiver(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Caregiver.create(new_caregiver, function(err, caregiver) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Caregiver added successfully!",data:caregiver});
        });
    }
};

exports.findById = function(req, res) {
    Caregiver.findById(req.params.id, function(err, caregiver) {
        if (err)
        res.send(err);
        res.json(caregiver);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Caregiver.update(req.params.id, new Caregiver(req.body), function(err, caregiver) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Caregiver successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  Caregiver.delete( req.params.id, function(err, caregiver) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Caregiver successfully deleted' });
  });
};