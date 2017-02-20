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
RingtoneManager.prototype.getRingtone = function(ringtones, ringtoneType) {
	ringtones.ringtoneList = {};
	
    exec(function(success) {
            ringtones.ringtoneList = success;
        },
        function(err) {
            console.log(err);
        }, "NativeRingtones", "get", [ringtoneType]);
};

module.exports = new RingtoneManager();
