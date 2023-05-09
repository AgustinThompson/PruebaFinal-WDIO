/// <reference types="node" />
export interface CompareData {
    rawMisMatchPercentage: number;
    misMatchPercentage: number;
    getBuffer: () => Buffer;
    diffBounds: {
        top: number;
        left: number;
        bottom: number;
        right: number;
    };
    analysisTime: number;
}
