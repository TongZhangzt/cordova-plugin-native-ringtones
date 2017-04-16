// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                var ringtones;
                cordova.plugins.NativeRingtones.getRingtone(function (success) {
                    ringtones = success;
                },
                    function (err) {
                        alert(err);
                    }, 'notification');

                cordova.plugins.backgroundMode.enable();
                console.log(cordova.plugins.backgroundMode.isActive());

                cordova.plugins.notification.local.on("trigger", function (notification, state) {
                    window.localStorage.setItem('notification', state);
                }, this);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .controller('listCtrl', function ($scope) {
        var lists = [{ Url: "/System/Library/Audio/UISounds/Modern/calendar_alert_chord.caf", Name: "calendar_alert_chord", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/airdrop_invite.caf", Name: "airdrop_invite", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/camera_shutter_burst.caf", Name: "camera_shutter_burst", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/camera_shutter_burst_begin.caf", Name: "camera_shutter_burst_begin", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/camera_shutter_burst_end.caf", Name: "camera_shutter_burst_end", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/sms_alert_aurora.caf", Name: "sms_alert_aurora", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/sms_alert_bamboo.caf", Name: "sms_alert_bamboo", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/sms_alert_circles.caf", Name: "sms_alert_circles", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/sms_alert_complete.caf", Name: "sms_alert_complete", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/sms_alert_hello.caf", Name: "sms_alert_hello", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/sms_alert_input.caf", Name: "sms_alert_input", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/sms_alert_keys.caf", Name: "sms_alert_keys", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/sms_alert_note.caf", Name: "sms_alert_note", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/sms_alert_popcorn.caf", Name: "sms_alert_popcorn", Category: "Modern" }, { Url: "/System/Library/Audio/UISounds/Modern/sms_alert_synth.caf", Name: "sms_alert_synth", Category: "Modern" }];
        //For IOS: var lists = [{ Name: "Beep Once", Url: "content://media/internal/audio/media/14" }, { Name: "Bubbles", Url: "content://media/internal/audio/media/17" }, { Name: "Charming Bell", Url: "content://media/internal/audio/media/18" }, { Name: "Chirps", Url: "content://media/internal/audio/media/19" }, { Name: "Dew Drops", Url: "content://media/internal/audio/media/20" }, { Name: "Flowers", Url: "content://media/internal/audio/media/21" }, { Name: "Good News", Url: "content://media/internal/audio/media/22" }];
        $scope.list = lists;

        $scope.custom = [{ Url: 'file://img/test.wav', Name: "Custom test" }];
        var custom = $scope.custom;

        $scope.clicked = function (index) {
            /*cordova.plugins.notification.local.schedule({
                id: 1,
                title: "Test Notification",
                text: "Single Notification",
                sound: lists[index].Url
            }); */
            cordova.plugins.NativeRingtones.playRingtone(lists[index].Url);
        };

        $scope.clickCustom = function (index) {
            /*   cordova.plugins.notification.local.schedule({
                   id: 1,
                   title: "Test Notification",
                   text: "Single Notification",
                   sound: custom[index].Url
               });  */
            cordova.plugins.NativeRingtones.playRingtone(custom[index].Url);
        };
    })

    .controller('buttonCtrl', ['$scope', function ($scope) {
        $scope.createNotification = function () {
            var now = new Date().getTime();
            var time = new Date(now + 60 * 1000);
            window.localStorage.setItem('notification', '');
            cordova.plugins.notification.local.schedule({
                id: 1,
                title: "First Notification",
                text: "Single Notification",
                at: time,
                sound: "/System/Library/Audio/UISounds/Modern/calendar_alert_chord.caf"
            });

        }
    }]);
