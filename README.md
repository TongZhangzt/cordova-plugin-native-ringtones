# cordova-plugin-native-ringtones [![npm version](https://badge.fury.io/js/cordova-plugin-native-ringtones.svg)](https://badge.fury.io/js/cordova-plugin-native-ringtones)

Plugin for the [Cordova](https://cordova.apache.org) framework to get the native ringtone list.

The plugin helps get the native ringtones list on Android or IOS devices. And you can also use this plugin to play or stop the native ringtones and custom ringtones(added in the www folder).

## Supported Platforms
- __iOS__ 
- __Android__ 

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

You can call the function getRingtone to get the ringtone list. There are two/three parameters for this function:  
1. successCallback function: The cordova plugin will pass the ringtone list by the `success` object and the ringtone list is put in an array, each object in this array represent a ringtone (with name, url and category).  
2. errorCallback function: The function that will be called if the getRingtone failed.  
3. (just for Android) An string value to indicate the ringtone type. There are three kinds of ringtones for `Android`: 'notification', 'alarm', 'ringtone'. The default value is *'notification'*.

```js
document.addEventListener('deviceready', function () {
        var ringtones;
        cordova.plugins.NativeRingtones.getRingtone(function(success) {
                ringtones = success;
            },
            function(err) {
                alert(err);
            });
            //An object array contains all the ringtones
            setTimeout(function() { console.log(ringtones); }, 1000); 
}, false);
```

You can call the function playRingtone or stopRingtone to play or stop a ringtone by passing the URI of this ringtone. This plugin allow you to play both native ringtones and custom ringtones.

```js
document.addEventListener('deviceready', function () {
        var ringtones;
        cordova.plugins.NativeRingtones.playRingtone("/System/Library/Audio/UISounds/Modern/calendar_alert_chord.caf");
}, false);
```

## License

This software is released under the [Apache 2.0 License](http://opensource.org/licenses/Apache-2.0).

