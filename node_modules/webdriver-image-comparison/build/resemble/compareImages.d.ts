/// <reference types="node" />
import { CompareOptions } from '../methods/images.interfaces';
import { CompareData } from './compare.interfaces';
export default function compareImages(image1: Buffer, image2: Buffer, options: CompareOptions): Promise<CompareData>;
