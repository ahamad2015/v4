'use strict';

const Resident = require('../models/resident.model');

exports.findAll = function(req, res) {
  Resident.findAll(function(err, resident) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', resident);
    res.send(resident);
  });
};

exports.create = function(req, res) {
    const new_resident = new Resident(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Resident.create(new_resident, function(err, resident) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Resident added successfully!",data:resident});
        });
    }
};

exports.findById = function(req, res) {
    Resident.findById(req.params.id, function(err, resident) {
        if (err)
        res.send(err);
        res.json(resident);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Resident.update(req.params.id, new Resident(req.body), function(err, resident) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Resident successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  Resident.delete( req.params.id, function(err, resident) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Resident successfully deleted' });
  });
};