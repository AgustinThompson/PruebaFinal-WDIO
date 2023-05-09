import { ScreenshotOutput } from '../helpers/afterScreenshot.interfaces';
import { Methods } from '../methods/methods.interface';
import { InstanceData } from '../methods/instanceData.interfaces';
import { Folders } from '../base.interface';
import { SaveFullPageOptions } from './fullPage.interfaces';
export default function saveFullPageScreen(methods: Methods, instanceData: InstanceData, folders: Folders, tag: string, saveFullPageOptions: SaveFullPageOptions): Promise<ScreenshotOutput>;
