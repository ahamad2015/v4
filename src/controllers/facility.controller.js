'use strict';

const Facility = require('../models/facility.model');

exports.findAll = function(req, res) {
  Facility.findAll(function(err, facility) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', facility);
    res.send(facility);
  });
};


exports.create = function(req, res) {
    const new_facility = new Facility(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Facility.create(new_facility, function(err, facility) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Facility added successfully!",data:facility});
        });
    }
};


exports.findById = function(req, res) {
    Facility.findById(req.params.id, function(err, facility) {
        if (err)
        res.send(err);
        res.json(facility);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Facility.update(req.params.id, new Facility(req.body), function(err, facility) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Facility successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Facility.delete( req.params.id, function(err, facility) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Facility successfully deleted' });
  });
};