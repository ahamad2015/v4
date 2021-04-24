'use strict';

const Room = require('../models/room.model');

exports.findAll = function(req, res) {
  Room.findAll(function(err, room) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', room);
    res.send(room);
  });
};

exports.create = function(req, res) {
    const new_room = new Room(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Room.create(new_room, function(err, room) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Room added successfully!",data:room});
        });
    }
};

exports.findById = function(req, res) {
    Room.findById(req.params.id, function(err, room) {
        if (err)
        res.send(err);
        res.json(room);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Room.update(req.params.id, new Room(req.body), function(err, room) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Room successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  Room.delete( req.params.id, function(err, room) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Room successfully deleted' });
  });
};