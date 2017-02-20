# cordova-plugin-native-ringtones [![npm version](https://badge.fury.io/js/cordova-plugin-native-ringtones.svg)](https://badge.fury.io/js/cordova-plugin-native-ringtones)

Plugin for the [Cordova](https://cordova.apache.org) framework to get the native ringtone list.

The plugin helps get the native ringtones list on Android or IOS devices. You can use this plugin to get three types of ringtones on Native device: TYPE_ALARM, TYPE_NOTIFICATION, TYPE_RINGTONE.

## Supported Platforms
- __Android__

Support for IOS platform will be updated.

## Installation
The plugin can be installed via Cordova-CLI and is publicly available on [NPM](https://www.npmjs.com/package/cordova-plugin-native-ringtones).

Execute from the projects root folder:

    $ cordova plugin add cordova-plugin-native-ringtones

Or install a specific version:

    $ cordova plugin add cordova-plugin-native-ringtones@VERSION

Or install the latest head version:

    $ cordova plugin add https://github.com/TongZhangzt/cordova-plugin-native-ringtones

## Usage
The plugin creates the object `cordova.plugins.NativeRingtones` and is accessible after the *deviceready* event has been fired.

You can call the function getRingtone to get the ringtone list. There are two parameters for this function:  
1. An object to store the ringtone list. The ringtone list will be store in the 'ringtoneList' property of the object.  
2. An string value to indicate the ringtone type. There are three kinds of ringtones for `Android`: 'notification', 'alarm', 'ringtone'. The default value is *'ringtone'*.

```js
document.addEventListener('deviceready', function () {
    var ringtones = {};
    cordova.plugins.NativeRingtones.getRingtone(ringtones, 'notification');
    console.log(ringtones.ringtoneList);
}, false);
```

## License

This software is released under the [Apache 2.0 License](http://opensource.org/licenses/Apache-2.0).

