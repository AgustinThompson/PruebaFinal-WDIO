import { ImageCompareResult } from '../methods/images.interfaces';
import { Methods } from '../methods/methods.interface';
import { InstanceData } from '../methods/instanceData.interfaces';
import { Folders } from '../base.interface';
import { CheckScreenOptions } from './screen.interfaces';
export default function checkScreen(methods: Methods, instanceData: InstanceData, folders: Folders, tag: string, checkScreenOptions: CheckScreenOptions): Promise<ImageCompareResult | number>;
