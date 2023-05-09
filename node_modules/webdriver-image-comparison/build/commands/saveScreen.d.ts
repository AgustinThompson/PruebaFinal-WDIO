import { Methods } from '../methods/methods.interface';
import { Folders } from '../base.interface';
import { SaveScreenOptions } from './screen.interfaces';
import { InstanceData } from '../methods/instanceData.interfaces';
import { ScreenshotOutput } from '../helpers/afterScreenshot.interfaces';
export default function saveScreen(methods: Methods, instanceData: InstanceData, folders: Folders, tag: string, saveScreenOptions: SaveScreenOptions): Promise<ScreenshotOutput>;
