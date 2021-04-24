'use strict';

const Loa = require('../models/loa.model');

exports.findAll = function(req, res) {
  Loa.findAll(function(err, loa) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', loa);
    res.send(loa);
  });
};

exports.create = function(req, res) {
    const new_loa = new Loa(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Loa.create(new_loa, function(err, loa) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Loa added successfully!",data:loa});
        });
    }
};

exports.findById = function(req, res) {
    Loa.findById(req.params.id, function(err, loa) {
        if (err)
        res.send(err);
        res.json(loa);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Loa.update(req.params.id, new Loa(req.body), function(err, loa) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Loa successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  Loa.delete( req.params.id, function(err, loa) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Loa successfully deleted' });
  });
};