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
    waveAnimation: number;
    /**
     * this is the float animation
     */
    floatAnimation: number;
    /**
     * the distance between the wave and lily pad
     */
    distance: number;
    /**
     * numbers follow a clock. 12 is vertical, 2 is like 2 oclock, 3 is horizontal, 4, 6, 7, 9, 10
     */
    direction: number;
};

export type WaveCoords = [number, number];
