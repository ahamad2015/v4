'use strict';

const Physio = require('../models/physio.model');

exports.findAll = function(req, res) {
  Physio.findAll(function(err, physio) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', physio);
    res.send(physio);
  });
};

exports.create = function(req, res) {
    const new_physio = new Physio(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Physio.create(new_physio, function(err, physio) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Physio added successfully!",data:physio});
        });
    }
};

exports.findById = function(req, res) {
    Physio.findById(req.params.id, function(err, physio) {
        if (err)
        res.send(err);
        res.json(physio);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Physio.update(req.params.id, new Physio(req.body), function(err, physio) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Physio successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  Physio.delete( req.params.id, function(err, physio) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Physio successfully deleted' });
  });
};