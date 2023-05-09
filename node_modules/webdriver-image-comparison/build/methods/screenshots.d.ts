import { Executor, TakeScreenShot } from './methods.interface';
import { FullPageScreenshotOptions, FullPageScreenshotNativeMobileOptions, FullPageScreenshotDataOptions, FullPageScreenshotsData } from './screenshots.interfaces';
export declare function getBase64FullPageScreenshotsData(takeScreenshot: TakeScreenShot, executor: Executor, options: FullPageScreenshotDataOptions): Promise<FullPageScreenshotsData>;
export declare function getFullPageScreenshotsDataNativeMobile(takeScreenshot: TakeScreenShot, executor: Executor, options: FullPageScreenshotNativeMobileOptions): Promise<FullPageScreenshotsData>;
export declare function getFullPageScreenshotsDataAndroidChromeDriver(takeScreenshot: TakeScreenShot, executor: Executor, options: FullPageScreenshotOptions): Promise<FullPageScreenshotsData>;
export declare function getFullPageScreenshotsDataDesktop(takeScreenshot: TakeScreenShot, executor: Executor, options: FullPageScreenshotOptions): Promise<FullPageScreenshotsData>;
export declare function takeBase64Screenshot(takeScreenshot: TakeScreenShot): Promise<string>;
