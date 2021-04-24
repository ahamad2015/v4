'use strict';

const Kpi = require('../models/kpi.model');

exports.findAll = function(req, res) {
  Kpi.findAll(function(err, kpi) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', kpi);
    res.send(kpi);
  });
};

exports.create = function(req, res) {
    const new_kpi = new Kpi(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Kpi.create(new_kpi, function(err, kpi) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Kpi added successfully!",data:kpi});
        });
    }
};

exports.findById = function(req, res) {
    Kpi.findById(req.params.id, function(err, kpi) {
        if (err)
        res.send(err);
        res.json(kpi);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Kpi.update(req.params.id, new Kpi(req.body), function(err, kpi) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Kpi successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  Kpi.delete( req.params.id, function(err, kpi) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Kpi successfully deleted' });
  });
};