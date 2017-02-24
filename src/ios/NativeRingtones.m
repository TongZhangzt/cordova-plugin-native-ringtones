/********* NativeRingtones.m Cordova Plugin Implementation *******/

#import "NativeRingtones.h"
#import <Cordova/CDV.h>
#import <UIKit/UIKit.h>
#import <AudioToolbox/AudioToolbox.h>
#import <Foundation/Foundation.h>

NSString* const DEFAULT_SOUND = @"res://platform_default";

@interface NativeRingtones : CDVPlugin {
  // Member variables go here.
}

- (void)get:(CDVInvokedUrlCommand*)command;
@end

@implementation NativeRingtones

- (void)get:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    //NSString* echo = [command.arguments objectAtIndex:0];

    NSMutableArray *audioFileList;
    NSMutableArray *_systemSounds = nil;

    audioFileList = [[NSMutableArray alloc] init];
    _systemSounds = [NSMutableArray array];

    NSFileManager *fileManager = [[NSFileManager alloc] init];
    NSURL *directoryURL = [NSURL URLWithString:@"/System/Library/Audio/UISounds"];
    NSArray *keys = [NSArray arrayWithObject:NSURLIsDirectoryKey];

    NSDirectoryEnumerator *enumerator = [fileManager
                                         enumeratorAtURL:directoryURL
                                         includingPropertiesForKeys:keys
                                         options:0
                                         errorHandler:^(NSURL *url, NSError *error) {
                                             // Handle the error.
                                             // Return YES if the enumeration should continue after the error.
                                             return YES;
                                         }];

    for (NSURL *url in enumerator) {
        NSError *error;
        NSNumber *isDirectory = nil;
        if (! [url getResourceValue:&isDirectory forKey:NSURLIsDirectoryKey error:&error]) {
            // handle error
        }
        else if (! [isDirectory boolValue]) {
            NSString *myString = url.absoluteString;
            [audioFileList addObject:[myString pathComponents].lastObject];

            SystemSoundID soundID;
            AudioServicesCreateSystemSoundID((__bridge_retained CFURLRef)url, &soundID);

            SoundInfomation *sound = [[SoundInfomation alloc] init];
            sound.soundID   = soundID;
            sound.soundUrl  = url;
            sound.soundName = url.lastPathComponent;

            [_systemSounds addObject:sound];
        }
    }

    if (DEFAULT_SOUND != nil) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArray:_systemSounds];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
