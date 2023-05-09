import { Executor } from '../methods/methods.interface';
import { AfterScreenshotOptions, ScreenshotOutput } from './afterScreenshot.interfaces';
export default function afterScreenshot(executor: Executor, options: AfterScreenshotOptions): Promise<ScreenshotOutput>;
