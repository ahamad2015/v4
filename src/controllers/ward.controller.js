'use strict';

const Ward = require('../models/ward.model');

exports.findAll = function(req, res) {
  Ward.findAll(function(err, ward) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', ward);
    res.send(ward);
  });
};


exports.create = function(req, res) {
    const new_ward = new Ward(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Ward.create(new_ward, function(err, ward) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Ward added successfully!",data:ward});
        });
    }
};


exports.findById = function(req, res) {
    Ward.findById(req.params.id, function(err, ward) {
        if (err)
        res.send(err);
        res.json(ward);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Ward.update(req.params.id, new Ward(req.body), function(err, ward) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Ward successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Ward.delete( req.params.id, function(err, ward) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Ward successfully deleted' });
  });
};