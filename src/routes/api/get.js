// src/routes/api/get.js
const { createSuccessResponse } = require('../../response');
//const Fragment = require('../../model/fragment').Fragment;
//const logger = require('../../logger');
// eslint-disable-next-line valid-jsdoc
/**
 * Get a list of fragments for the current user
 */
module.exports = (req, res) => {
  // TODO: this is just a placeholder to get something working...

  /* if (!Buffer.isBuffer(req.body)) {
    logger.warn('GET /fragments received unsupported media type');
    return res.status(400).json(createErrorResponse(400, 'Bad Request'));
  }

  const fragments = new Fragment();
  fragments.byUser(); */

  res.status(200).json(createSuccessResponse({ fragments: [] }));
};
