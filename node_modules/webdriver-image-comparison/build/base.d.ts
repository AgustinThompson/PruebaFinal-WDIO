import { Folders } from './base.interface';
import { ClassOptions, DefaultOptions } from './helpers/options.interface';
export default class BaseClass {
    defaultOptions: DefaultOptions;
    folders: Folders;
    constructor(options: ClassOptions);
}
