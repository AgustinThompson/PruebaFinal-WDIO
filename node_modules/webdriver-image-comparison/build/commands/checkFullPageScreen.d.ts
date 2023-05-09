import { ImageCompareResult } from '../methods/images.interfaces';
import { Methods } from '../methods/methods.interface';
import { InstanceData } from '../methods/instanceData.interfaces';
import { Folders } from '../base.interface';
import { CheckFullPageOptions } from './fullPage.interfaces';
export default function checkFullPageScreen(methods: Methods, instanceData: InstanceData, folders: Folders, tag: string, checkFullPageOptions: CheckFullPageOptions): Promise<ImageCompareResult | number>;
