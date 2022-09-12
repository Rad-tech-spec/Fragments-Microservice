/* eslint-disable indent */
/* eslint-disable max-len */
// src/server.js

// We want to gracefully shutdown our server
const stoppable = require('stoppable');

// Get our logger instance
const logger = require('./logger');

// Get our express app instance
const app = require('./app');

// Get the desired port from the process environment. Default to `8080`
const port = parseInt(process.env.PORT || 8080, 10);

// Start a server listening on this port
const server = stoppable(
  // eslint-disable-next-line indent
  app.listen(port, () => {
    // Log a message that the server has started, and which port it's using.
    // eslint-disable-next-line object-curly-spacing,
    logger.info({ port }, `Server started`);
    // eslint-disable-next-line comma-dangle
  })
);

// Export our server instance so other parts of our code can access it if necessary.
module.exports = server;
