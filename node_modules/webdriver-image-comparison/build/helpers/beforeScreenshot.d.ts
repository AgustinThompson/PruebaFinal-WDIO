import { BeforeScreenshotOptions, BeforeScreenshotResult } from './beforeScreenshot.interface';
import { Executor } from '../methods/methods.interface';
export default function beforeScreenshot(executor: Executor, options: BeforeScreenshotOptions, addShadowPadding?: boolean): Promise<BeforeScreenshotResult>;
