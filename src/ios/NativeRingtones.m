/********* NativeRingtones.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>
#import "APPLocalNotificationOptions.h"

@interface NativeRingtones : CDVPlugin {
  // Member variables go here.
}

- (void)get:(CDVInvokedUrlCommand*)command;
@end

@implementation NativeRingtones

- (void)get:(CDVInvokedUrlCommand*)command
{


    CDVPluginResult* pluginResult = nil;
    NSString* echo = [command.arguments objectAtIndex:0];


    if (echo != nil && [echo length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:UILocalNotificationDefaultSoundName];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
