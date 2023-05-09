import { ScreenshotOutput } from '../helpers/afterScreenshot.interfaces';
import { Methods } from '../methods/methods.interface';
import { InstanceData } from '../methods/instanceData.interfaces';
import { Folders } from '../base.interface';
import { SaveElementOptions } from './element.interfaces';
export default function saveElement(methods: Methods, instanceData: InstanceData, folders: Folders, element: HTMLElement, tag: string, saveElementOptions: SaveElementOptions): Promise<ScreenshotOutput>;
