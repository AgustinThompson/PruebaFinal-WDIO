import { ScreenDimensions } from '../clientSideScripts/screenDimensions.interfaces';
export interface InstanceData {
    browserName: string;
    browserVersion: string;
    deviceName: string;
    logName: string;
    name: string;
    nativeWebScreenshot: boolean;
    platformName: string;
    platformVersion: string;
}
export interface InstanceOptions {
    addressBarShadowPadding: number;
    toolBarShadowPadding: number;
    browserName: string;
    browserVersion: string;
    deviceName: string;
    logName: string;
    name: string;
    nativeWebScreenshot: boolean;
    platformName: string;
    platformVersion: string;
}
export interface EnrichedInstanceData extends ScreenDimensions, InstanceOptions {
    isAndroid: boolean;
    isAndroidChromeDriverScreenshot: boolean;
    isAndroidNativeWebScreenshot: boolean;
    isIos: boolean;
    isMobile: boolean;
    isTestInBrowser: boolean;
    isTestInMobileBrowser: boolean;
}
