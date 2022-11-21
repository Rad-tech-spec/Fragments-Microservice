/* eslint-disable object-curly-spacing */
// src/routes/index.js
const express = require('express');
const { authenticate } = require('../authorization');

// version and author from package.json
const { version, author } = require('../../package.json');
const { createSuccessResponse } = require('../response');

// Create a router that we can use to mount our API
// eslint-disable-next-line new-cap
const router = express.Router();

/**
 * Expose all of our API routes on /v1/* to include an API version.
 * Protect them all so you have to be authenticated in order to access.
 */
router.use(`/v1`, authenticate(), require('./api'));

/**
 * Define a simple health check route. If the server is running
 * we'll respond with a 200 OK.  If not, the server isn't healthy.
 */
router.get('/', (req, res) => {
  // Client's shouldn't cache this response (always request it fresh)
  res.setHeader('Cache-Control', 'no-cache');
  const data = { author, version, githubUrl: 'https://github.com/Rad-tech-spec/fragments' };

  // Send a 200 'OK' response
  res.status(200).json(createSuccessResponse(data));
});

module.exports = router;
