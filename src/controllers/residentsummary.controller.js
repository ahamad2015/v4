'use strict';

const ResidentSummary = require('../models/residentsummary.model');

exports.findAll = function(req, res) {
  ResidentSummary.findAll(function(err, residentsummary) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', residentsummary);
    res.send(residentsummary);
  });
};

exports.create = function(req, res) {
    const new_residentsummary = new ResidentSummary(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        ResidentSummary.create(new_residentsummary, function(err, residentsummary) {
            if (err)
            res.send(err);
            res.json({error:false,message:"ResidentSummary added successfully!",data:residentsummary});
        });
    }
};

exports.findById = function(req, res) {
    ResidentSummary.findById(req.params.id, function(err, residentsummary) {
        if (err)
        res.send(err);
        res.json(residentsummary);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        ResidentSummary.update(req.params.id, new ResidentSummary(req.body), function(err, residentsummary) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'ResidentSummary successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  ResidentSummary.delete( req.params.id, function(err, residentsummary) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'ResidentSummary successfully deleted' });
  });
};