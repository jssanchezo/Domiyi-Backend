// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'ec97e8ee92ed42d7bbeae6dac273628a',
  captureUncaught: true,
  captureUnhandledRejections: true
});
module.exports=rollbar;