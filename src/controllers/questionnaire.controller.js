'use strict';

const Questionnaire = require('../models/questionnaire.model');

exports.findAll = function(req, res) {
  Questionnaire.findAll(function(err, questionnaire) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', questionnaire);
    res.send(questionnaire);
  });
};

exports.create = function(req, res) {
    const new_questionnaire = new Questionnaire(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Questionnaire.create(new_questionnaire, function(err, questionnaire) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Questionnaire added successfully!",data:questionnaire});
        });
    }
};

exports.findById = function(req, res) {
    Questionnaire.findById(req.params.id, function(err, questionnaire) {
        if (err)
        res.send(err);
        res.json(questionnaire);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Questionnaire.update(req.params.id, new Questionnaire(req.body), function(err, questionnaire) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Questionnaire successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  Questionnaire.delete( req.params.id, function(err, questionnaire) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Questionnaire successfully deleted' });
  });
};