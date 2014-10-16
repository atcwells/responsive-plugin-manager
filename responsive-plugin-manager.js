var _ = require('lodash-node');

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

module.exports = init = function(options, callback) {
	return new plugin_manager(options, callback);
}

function plugin_manager(optionsObj, callback) {
	this.options = optionsObj || {};
	this.logger = {
		debug : (this.options.logger && this.options.logger.debug) || console.log,
		info : (this.options.logger && this.options.logger.info) || console.log,
		warn : (this.options.logger && this.options.logger.war) || console.log,
		error : (this.options.logger && this.options.logger.error) || console.log
	};

	var self = this;
	self.controller = require('./mongodb/mongooseController.js')(self.options, function(err, msg) {
    if(self.options.wipeSchmas) {
      self._wipeSchemas(callback);
    } else {
      callback(err, msg);
    }
  });
};

plugin_manager.prototype.getAvailablePlugins = function(callback) {

};

plugin_manager.prototype.installPlugin = function(callback) {

};

plugin_manager.prototype.mountPlugin = function(callback) {

};

plugin_manager.prototype.unmountPlugin = function(callback) {

};
