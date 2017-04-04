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
RingtoneManager.prototype.getRingtone = function(successCallback, errorCallback, ringtoneType) {
    exec(successCallback, errorCallback, "NativeRingtones", "get", [ringtoneType]);
};

RingtoneManager.prototype.playRingtone = function(successCallback, errorCallback, ringtoneUri) {
    exec(successCallback, errorCallback, "NativeRingtones", "play", [ringtoneUri]);
};

RingtoneManager.prototype.stopRingtone = function(successCallback, errorCallback, ringtoneUri) {
    exec(successCallback, errorCallback, "NativeRingtones", "stop", [ringtoneUri]);
};

module.exports = new RingtoneManager();
