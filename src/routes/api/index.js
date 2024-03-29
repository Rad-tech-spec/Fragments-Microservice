// src/routes/api/index.js
const rawBody = require('./post').rawBody;
const rawBodyPut = require('./put').rawBodyPUT;
/**
 * The main entry-point for the v1 version of the fragments API.
 */
const express = require('express');

// Create a router on which to mount our API endpoints
// eslint-disable-next-line new-cap
const router = express.Router();

// Define our first route, which will be: GET /v1/fragments
router.get('/fragments', require('./get'));
router.get('/fragments/?expand=1', require('./get'));
router.get('/fragments/:id', require('./getid'));
router.get('/fragments/:id/info', require('./getInfo'));

// Other routes will go here later on...
router.post('/fragments', rawBody(), require('./post'));
router.delete('/fragments/:id', require('./delete'));
router.put('/fragments/:id', rawBodyPut(), require('./put'));

module.exports = router;
