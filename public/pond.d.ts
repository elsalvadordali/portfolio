import type { LilyPadType } from './types';
export declare let clickedLilyPadCount: number;
export declare const RADIUS = 35;
export declare const WIDTH: number;
export declare const HEIGHT: number;
export declare let coords: {
    x: number;
    y: number;
};
export declare const MAX_NUMBER_OF_HORIZONTAL_LILY_PADS: number;
export declare const MAX_NUMBER_OF_VERTICAL_LILY_PADS: number;
export declare const PADS_SVG_PATHS: string[];
export declare const COLORS: string[];
export declare function generateLilyPads(i: number, j: number, runningTwice: boolean): LilyPadType;
export declare function changeColor(lilyPad: LilyPadType): LilyPadType;
export declare function wave(e: MouseEvent, lilyPads: LilyPadType[], waves: [number, number][]): [number, number][];
