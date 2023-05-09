import { Executor } from './methods.interface';
import { EnrichedInstanceData, InstanceOptions } from './instanceData.interfaces';
export default function getEnrichedInstanceData(executor: Executor, instanceOptions: InstanceOptions, addShadowPadding: boolean): Promise<EnrichedInstanceData>;
