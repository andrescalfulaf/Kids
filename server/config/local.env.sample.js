'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'kids-secret',

  FACEBOOK_ID:      '1043929775689533',
  FACEBOOK_SECRET:  '780e7db4ea4f41ab78995af28670a090',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
