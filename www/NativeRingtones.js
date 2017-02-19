var exec = require('cordova/exec');

function RingtoneManager() {
    this.propTest = 'superTest';
}


/**
 * Get the ringtone list of the device
 * 
 * @param {Object}
 *            Set the ringtone list to the attribute ringtoneList of the object
 */
RingtoneManager.prototype.getRingtone = function(ringtones) {
	ringtones.ringtoneList = {};
	
    exec(function(success) {
            ringtones.ringtoneList = success;
        },
        function(err) {
            console.log(err);
        }, "Ringtone", "get");
};

module.exports = new RingtoneManager();
