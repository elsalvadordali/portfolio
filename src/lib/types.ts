export type LilyPadType = {
    /**
     * The position on the x-axis
     */
    x: number;
    /**
     * This is the position on the y-axis
     */
    y: number;
    /**
     * This is a number of the index of the color array
     */
    colorIndex: number;
    /**
     * Column number
     */
    pathIndex: number;  
    /**
     * The intensity of the wave 1 is highest, 3 is lowest
     */
    /**
     * this is the float animation
     */
    floatAnimation: number;
    /**
     * distance from the click
     */
    distance: number
    /**
     * css class
     */
    css: string
};

export type WaveCoords = [number, number];
