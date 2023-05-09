import { ImageCompareResult } from '../methods/images.interfaces';
import { Methods } from '../methods/methods.interface';
import { InstanceData } from '../methods/instanceData.interfaces';
import { Folders } from '../base.interface';
import { CheckElementOptions } from './element.interfaces';
export default function checkElement(methods: Methods, instanceData: InstanceData, folders: Folders, element: HTMLElement, tag: string, checkElementOptions: CheckElementOptions): Promise<ImageCompareResult | number>;
