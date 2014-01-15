/**
 * Module dependencies
 */

var cookie = require('cookie');
var throttle = require('throttle');

/**
 * Set the default name
 */

var name = '_access_token';

/**
 * Get the access token cookie
 *
 * @return {String}
 * @api public
 */

module.exports = exports = throttle(function() {
  return cookie(exports.name || name);
}, 10000);

/**
 * Get the access token in the form of a bearer token
 *
 * @return {String}
 * @api public
 */

exports.bearer = function() {
  var accessToken = exports();
  return accessToken ? 'Bearer '+accessToken : undefined;
};

/**
 * Get the access token in the form of a header options
 *
 * @return {Object}
 * @api public
 */

exports.auth = function() {
  var bearer = exports.bearer();
  return bearer ? {'authorization': bearer} : {};
};
