const Fragment = require('../../model/fragment').Fragment;
var markdown = require('markdown').markdown;

const { createErrorResponse } = require('../../response');

module.exports = async (req, res) => {
  // TODO: this is just a placeholder to get something working.
  var params,
    ext,
    extension = false;

  if (req.params.id.includes('.')) {
    extension = true;
    ext = req.params.id.substring(req.params.id.indexOf('.') + 1);
    params = req.params.id.substring(0, req.params.id.indexOf('.'));
  } else {
    params = req.params.id;
  }

  var ownerId = require('crypto').createHash('sha256').update(req.user).digest('hex');

  try {
    var metadata = await Fragment.byId(ownerId, params);
  } catch (err) {
    throw new Error('Id does not exist!');
  }

  //console.log(params);
  const type = metadata.type;
  //console.log(metadata);

  if (!metadata) {
    res.status(404).json(
      createErrorResponse({
        status: 404,
        err: 'Metadata with given id does not exist',
      })
    );
  }

  metadata = await metadata.getData();
  metadata = metadata.toString();
  //console.log('Line 38: ' + metadata);

  if (extension) {
    if (ext == 'html' && type == 'text/plain') {
      res.status(200);
      res.type('html');
      res.send(`<h1> ${metadata}</h1>`);
    }
    if (ext == 'html' && type == 'text/markdown') {
      res.status(200);
      res.type('html');
      var htmlResult = markdown.toHTML(metadata);
      res.send(htmlResult);
    }
  } else {
    res.setHeader('Content-Type', type);
    res.send(metadata);
  }
};