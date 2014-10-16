var _ = require('lodash-node');

module.exports = init = function(options, callback) {
  return new plugin_manager(options, callback);
}

function pluginFolders(optionsObj, callback) {
  this.options = optionsObj || {};
  this.logger = {
    debug : (this.options.logger && this.options.logger.debug) || console.log,
    info : (this.options.logger && this.options.logger.info) || console.log,
    warn : (this.options.logger && this.options.logger.war) || console.log,
    error : (this.options.logger && this.options.logger.error) || console.log
  };

  var recognizedFolders = this._RECOGNIZED_FOLDERS;

  var self = this;
};

pluginFolders.prototype._RECOGNIZED_FOLDERS = [
  'directives',
  'controllers',
  'api',
  'views',
  'services',
  'records',
  'schemas',
  'filters',
  'fonts',
  'styles'
];
