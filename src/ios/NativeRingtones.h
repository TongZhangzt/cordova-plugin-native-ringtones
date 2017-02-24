#import <Foundation/Foundation.h>

@interface SoundInfomation : NSObject

/**
 *  系统声音编号(必须有)
 */
@property (nonatomic)         UInt32    soundID;

/**
 *  系统声音地址
 */
@property (nonatomic, strong) NSURL    *soundUrl;

/**
 *  声音的名字
 */
@property (nonatomic, strong) NSString *soundName;


@end
