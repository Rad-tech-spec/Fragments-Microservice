/* eslint-disable object-curly-spacing */
// src/routes/index.js
const express = require('express');
const { authenticate } = require('../authorization');

// version and author from package.json
const { version, author } = require('../../package.json');
const { createSuccessResponse } = require('../response');
const { hostname } = require('os');

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
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).json(
    createSuccessResponse({
      author: author,
      githubUrl: 'https://github.com/your-github-account-username/fragments',
      version,
      // Include the hostname in the response
      hostname: hostname(),
    })
  );
});
module.exports = router;
