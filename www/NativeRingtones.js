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
RingtoneManager.prototype.getRingtone = function (successCallback, errorCallback, ringtoneType) {
    exec(successCallback, errorCallback, "NativeRingtones", "get", [ringtoneType]);
};

RingtoneManager.prototype.playRingtone = function (successCallback, errorCallback, ringtoneUri) {
    if (ringtoneUri.indexOf("content") >= 0) {
        exec(successCallback, errorCallback, "NativeRingtones", "play", [ringtoneUri]);
    }
    else {
        var contentPath = window.location.pathname.substr(window.location.pathname, window.location.pathname.length - 10);
        var path = "file://" + contentPath + ringtoneUri.substr(7, ringtoneUri.length - 1);
        new Media(path, function (success) {
            console.log(success);
        }).play();
    }
};

RingtoneManager.prototype.stopRingtone = function (successCallback, errorCallback, ringtoneUri) {
    exec(successCallback, errorCallback, "NativeRingtones", "stop", [ringtoneUri]);
};

module.exports = new RingtoneManager();
